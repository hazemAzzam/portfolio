import * as React from "react";
import {
  useFormContext,
  type ControllerProps,
  type ControllerRenderProps,
  type FieldPath,
  type FieldValues,
  type PathValue,
} from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { GoogleMap, OverlayView } from "@react-google-maps/api";
import { useGoogleMaps } from "./hooks/use-google-maps";
import { useGeocoder } from "./hooks/use-geocoder";
import { useMapLocation } from "./hooks/use-map-location";
import { usePlacesAutocomplete } from "./hooks/use-places-autocomplete";
import { RiMapPin3Fill, RiSearchLine } from "react-icons/ri";
import { Input } from "@/components/ui/input";

const Marker = () => <RiMapPin3Fill className="w-10 h-10 text-red-500" />;

type FormMapInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TLatName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TLngName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TAddressName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  latFieldName: TLatName;
  lngFieldName: TLngName;
  addressFieldName?: TAddressName;
  label: string;
  disabled?: boolean;
  className?: string;
  control?: ControllerProps<TFieldValues, TLatName>["control"];
  googleMapsApiKey?: string;
};

function MapDialog({
  isOpen,
  onClose,
  onLocationSelect,
  googleMapsApiKey,
  initialLat,
  initialLng,
  onAddressUpdate,
}: {
  isOpen: boolean;
  onClose: () => void;
  onLocationSelect: (position: { lat: number; lng: number }) => void;
  googleMapsApiKey?: string;
  initialLat?: number;
  initialLng?: number;
  onAddressUpdate?: (address: string) => void;
}) {
  const { isLoaded, loadError } = useGoogleMaps(googleMapsApiKey);
  const { reverseGeocode } = useGeocoder(isLoaded);
  const {
    center: initialCenter,
    selectedPosition,
    defaultCenter,
    onMapLoad,
    updatePosition,
  } = useMapLocation(initialLat, initialLng, isOpen);

  const mapRef = React.useRef<google.maps.Map | null>(null);
  const [center, setCenter] = React.useState(initialCenter);

  // Sync center when initial center changes
  React.useEffect(() => {
    setCenter(initialCenter);
  }, [initialCenter]);

  // Handle place selection from search
  const handlePlaceSelect = React.useCallback(
    (location: { lat: number; lng: number; address: string }) => {
      setCenter({ lat: location.lat, lng: location.lng });
      if (mapRef.current) {
        mapRef.current.setCenter({ lat: location.lat, lng: location.lng });
        mapRef.current.setZoom(15);
      }
      if (onAddressUpdate) {
        onAddressUpdate(location.address);
      }
    },
    [onAddressUpdate]
  );

  const { inputRef } = usePlacesAutocomplete(
    isLoaded,
    handlePlaceSelect,
    isOpen
  );

  // Handle map load
  const handleMapLoad = React.useCallback(
    (map: google.maps.Map) => {
      mapRef.current = map;
      onMapLoad(map);
      if (onAddressUpdate) {
        reverseGeocode(defaultCenter.lat, defaultCenter.lng, onAddressUpdate);
      }
    },
    [onMapLoad, defaultCenter, onAddressUpdate, reverseGeocode]
  );

  // Handle map idle (after pan/zoom)
  const handleIdle = React.useCallback(() => {
    const position = updatePosition();
    if (position) {
      // Update center state so OverlayView repositions
      setCenter(position);
      if (onAddressUpdate) {
        reverseGeocode(position.lat, position.lng, onAddressUpdate);
      }
    }
  }, [updatePosition, reverseGeocode, onAddressUpdate]);

  const handleContinue = () => {
    onLocationSelect(selectedPosition);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Select Location</DialogTitle>
          <DialogDescription>
            Search for a location or move the map to select a location. The
            marker will stay at the center.
          </DialogDescription>
        </DialogHeader>
        {isOpen && (
          <div className="space-y-3">
            <div className="relative">
              <RiSearchLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                ref={inputRef}
                type="text"
                placeholder="Search for a location..."
                className="pl-9"
              />
            </div>
            <div className="relative w-full h-[400px] rounded-md border overflow-hidden bg-gray-100">
              {!isLoaded && !loadError && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/90 backdrop-blur-sm z-50">
                  <div className="flex flex-col items-center gap-2">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    <div>Loading map...</div>
                  </div>
                </div>
              )}
              {loadError && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/90 backdrop-blur-sm z-50">
                  <div className="text-center p-4 max-w-md">
                    <p className="text-destructive font-medium mb-2">
                      Failed to load Google Maps
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {loadError.message || "Please check your API key."}
                    </p>
                  </div>
                </div>
              )}
              {isLoaded && (
                <GoogleMap
                  mapContainerStyle={{ width: "100%", height: "100%" }}
                  center={center}
                  zoom={14}
                  onLoad={handleMapLoad}
                  onIdle={handleIdle}
                  options={{
                    disableDefaultUI: false,
                    zoomControl: true,
                    mapTypeControl: false,
                    streetViewControl: false,
                    fullscreenControl: true,
                  }}
                >
                  <OverlayView
                    position={center}
                    mapPaneName={OverlayView.FLOAT_PANE}
                  >
                    <div
                      className="pointer-events-none"
                      style={{
                        transform: "translate(-50%, -50%)",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                      }}
                    >
                      <Marker />
                    </div>
                  </OverlayView>
                </GoogleMap>
              )}
            </div>
          </div>
        )}
        <DialogFooter>
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="button" onClick={handleContinue}>
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function CoordinateInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  field,
  placeholder,
  disabled,
}: {
  field: ControllerRenderProps<TFieldValues, TName>;
  placeholder: string;
  disabled?: boolean;
}) {
  return (
    <InputGroup>
      <InputGroupInput
        {...field}
        type="number"
        step="any"
        value={field.value ?? ""}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => {
          const value =
            e.target.value === "" ? undefined : parseFloat(e.target.value);
          field.onChange(isNaN(value as number) ? undefined : value);
        }}
      />
    </InputGroup>
  );
}

function FormMapInput<
  TFieldValues extends FieldValues = FieldValues,
  TLatName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TLngName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TAddressName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  latFieldName,
  lngFieldName,
  addressFieldName,
  label,
  disabled,
  className,
  control,
  googleMapsApiKey,
}: FormMapInputProps<TFieldValues, TLatName, TLngName, TAddressName>) {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const formContext = useFormContext<TFieldValues>();
  const formControl = control ?? formContext.control;

  const currentLat = formContext.watch(latFieldName);
  const currentLng = formContext.watch(lngFieldName);

  // Reverse geocode when lat/lng change manually
  React.useEffect(() => {
    if (
      addressFieldName &&
      currentLat != null &&
      currentLng != null &&
      window.google?.maps
    ) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode(
        { location: { lat: currentLat, lng: currentLng } },
        (results, status) => {
          if (status === "OK" && results?.[0]) {
            formContext.setValue(
              addressFieldName,
              results[0].formatted_address as PathValue<TFieldValues, TAddressName>,
              { shouldValidate: true }
            );
          }
        }
      );
    }
  }, [currentLat, currentLng, addressFieldName, formContext]);

  const handleLocationSelect = React.useCallback(
    (position: { lat: number; lng: number }) => {
      formContext.setValue(latFieldName, position.lat as PathValue<TFieldValues, TLatName>, {
        shouldValidate: true,
      });
      formContext.setValue(lngFieldName, position.lng as PathValue<TFieldValues, TLngName>, {
        shouldValidate: true,
      });
      setIsDialogOpen(false);
    },
    [formContext, latFieldName, lngFieldName]
  );

  const handleAddressUpdate = React.useCallback(
    (address: string) => {
      if (addressFieldName) {
        formContext.setValue(addressFieldName, address as PathValue<TFieldValues, TAddressName>, {
          shouldValidate: true,
        });
      }
    },
    [formContext, addressFieldName]
  );

  return (
    <FormItem className={className}>
      <div className="flex items-center justify-between">
        <FormLabel>{label}</FormLabel>
        <button
          type="button"
          onClick={() => setIsDialogOpen(true)}
          disabled={disabled}
          className="text-sm text-primary hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Change location
        </button>
      </div>
      <div className="flex gap-2">
        <FormField
          control={formControl}
          name={latFieldName}
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <CoordinateInput
                  field={field}
                  placeholder="Latitude"
                  disabled={disabled}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formControl}
          name={lngFieldName}
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <CoordinateInput
                  field={field}
                  placeholder="Longitude"
                  disabled={disabled}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      {addressFieldName && (
        <FormField
          control={formControl}
          name={addressFieldName}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputGroup>
                  <InputGroupInput
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Address"
                    disabled={disabled}
                    readOnly
                  />
                </InputGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
      <MapDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onLocationSelect={handleLocationSelect}
        onAddressUpdate={addressFieldName ? handleAddressUpdate : undefined}
        googleMapsApiKey={googleMapsApiKey}
        initialLat={formContext.watch(latFieldName)}
        initialLng={formContext.watch(lngFieldName)}
      />
    </FormItem>
  );
}

export { FormMapInput };

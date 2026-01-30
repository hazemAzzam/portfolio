"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { Autocomplete, GoogleMap } from "@react-google-maps/api";

import { MapPin } from "lucide-react";
import React, { ReactNode, useRef, useState } from "react";

interface LocationData {
  lat: number;
  lng: number;
  details: string;
}

export default function MapLocationMenu({
  children,
  onSubmit,
}: {
  children: ReactNode;
  onSubmit(props: LocationData): void;
}) {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const geocoder = new google.maps.Geocoder();

  const onLocate = async () => {
    const center = map?.getCenter();
    if (!center) return;
    
    const lat = center.lat();
    const lng = center.lng();
    const details = await geocoder.geocode({ location: center });

    if (details.results[0]?.formatted_address) {
      onSubmit({
        lat,
        lng,
        details: details.results[0].formatted_address,
      });
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-sm p-0">
        <Card size="sm" className="mx-auto w-full max-w-sm">
          <CardContent>
            <MapContainer map={map} setMap={setMap} />
          </CardContent>
          <CardFooter className="flex-col gap-2 bg-accent items-end">
            <PopoverClose asChild>
              <Button onClick={onLocate}>Save</Button>
            </PopoverClose>
          </CardFooter>
        </Card>
      </PopoverContent>
    </Popover>
  );
}

function MapContainer({
  map,
  setMap,
}: {
  map: google.maps.Map | null;
  setMap(map: google.maps.Map): void;
}) {
  return (
    <div className="relative">
      <MapSearch
        onSelect={(lat, lng) => {
          if (map) map.panTo({ lat, lng });
        }}
      />
      <CenteredMarker />
      <GoogleMap
        options={{
          fullscreenControl: false,
          mapTypeControl: false,
          streetViewControl: false,
          zoomControl: false,
        }}
        mapContainerStyle={{
          width: "100%",
          height: "300px",
          zIndex: 1,
        }}
        center={{
          lat: 30.0444,
          lng: 31.2357,
        }}
        onLoad={(m) => setMap(m)}
        zoom={13}
      />

      <LocateMeButton map={map} />
    </div>
  );
}
function MapSearch({
  onSelect,
}: {
  onSelect: (lat: number, lng: number) => void;
}) {
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  return (
    <Autocomplete
      onLoad={(auto) => (autocompleteRef.current = auto)}
      onPlaceChanged={() => {
        const place = autocompleteRef.current?.getPlace();
        if (!place?.geometry?.location) return;
        onSelect(place.geometry.location.lat(), place.geometry.location.lng());
      }}
      className="z-500!"
    >
      <input
        className="absolute top-2 left-2 z-500! bg-background w-72 pointer-events-auto rounded border px-3 py-2"
        placeholder="Search location"
      />
    </Autocomplete>
  );
}

function LocateMeButton({ map }: { map: google.maps.Map | null }) {
  const handleClick = () => {
    if (navigator.geolocation && map) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        map.panTo({ lat: latitude, lng: longitude });
        map.setZoom(16);
      });
    }
  };

  return (
    <button
      className="absolute bottom-2 left-2 z-50 rounded bg-white p-2 shadow"
      onClick={handleClick}
    >
      📍 Locate Me
    </button>
  );
}

const CenteredMarker = () => {
  return (
    <div className="absolute z-100! pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full">
      <MapPin />
    </div>
  );
};

import { useRef, useEffect, useCallback } from "react";

export function usePlacesAutocomplete(
  isLoaded: boolean,
  onPlaceSelect: (location: {
    lat: number;
    lng: number;
    address: string;
  }) => void,
  isOpen?: boolean
) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  useEffect(() => {
    // Only initialize when dialog is open, maps are loaded
    if (!isOpen || !isLoaded || !window.google?.maps?.places) {
      // Clean up when dialog closes
      if (autocompleteRef.current) {
        window.google.maps.event.clearInstanceListeners(autocompleteRef.current);
        autocompleteRef.current = null;
      }
      return;
    }

    // Clean up previous instance if it exists
    if (autocompleteRef.current) {
      window.google.maps.event.clearInstanceListeners(autocompleteRef.current);
      autocompleteRef.current = null;
    }

    // Small delay to ensure input is fully in DOM and visible
    const timeoutId = setTimeout(() => {
      if (!inputRef.current || !window.google?.maps?.places) return;

      try {
        // Initialize Autocomplete (still supported for existing customers)
        autocompleteRef.current = new window.google.maps.places.Autocomplete(
          inputRef.current,
          {
            fields: ["geometry.location", "formatted_address"],
            types: ["geocode", "establishment"],
          }
        );

        // Listen for place selection
        autocompleteRef.current.addListener("place_changed", () => {
          const place = autocompleteRef.current?.getPlace();
          if (place?.geometry?.location) {
            const lat = place.geometry.location.lat();
            const lng = place.geometry.location.lng();
            const address = place.formatted_address || "";

            onPlaceSelect({ lat, lng, address });
          }
        });
      } catch (error) {
        console.error("Error initializing Places Autocomplete:", error);
      }
    }, 200);

    return () => {
      clearTimeout(timeoutId);
      if (autocompleteRef.current) {
        window.google.maps.event.clearInstanceListeners(
          autocompleteRef.current
        );
        autocompleteRef.current = null;
      }
    };
  }, [isOpen, isLoaded, onPlaceSelect]);

  const clearInput = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }, []);

  return {
    inputRef,
    clearInput,
  };
}

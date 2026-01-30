import { useRef, useCallback, useEffect } from "react";

export function useGeocoder(isLoaded: boolean) {
  const geocoderRef = useRef<google.maps.Geocoder | null>(null);

  useEffect(() => {
    if (isLoaded && window.google?.maps && !geocoderRef.current) {
      geocoderRef.current = new window.google.maps.Geocoder();
    }
  }, [isLoaded]);

  const reverseGeocode = useCallback(
    (lat: number, lng: number, onSuccess: (address: string) => void): void => {
      if (!geocoderRef.current) return;

      geocoderRef.current.geocode(
        { location: { lat, lng } },
        (results, status) => {
          if (status === "OK" && results?.[0]) {
            onSuccess(results[0].formatted_address);
          }
        }
      );
    },
    []
  );

  return { reverseGeocode };
}

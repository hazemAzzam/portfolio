import { useLoadScript } from "@react-google-maps/api";

const GOOGLE_MAPS_LIBRARIES: ("places" | "geocoding")[] = ["places", "geocoding"];

export function useGoogleMaps(apiKey?: string) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey || "",
    libraries: GOOGLE_MAPS_LIBRARIES,
  });

  return {
    isLoaded,
    loadError,
  };
}


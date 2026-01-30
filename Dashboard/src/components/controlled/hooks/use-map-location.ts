import { useState, useEffect, useRef, useCallback } from "react";

const CAIRO_DEFAULT = { lat: 30.0444, lng: 31.2357 };

export function useMapLocation(
  initialLat?: number,
  initialLng?: number,
  isOpen?: boolean
) {
  const mapRef = useRef<google.maps.Map | null>(null);

  const getDefaultCenter = useCallback(() => {
    if (
      typeof initialLat === "number" &&
      isFinite(initialLat) &&
      typeof initialLng === "number" &&
      isFinite(initialLng)
    ) {
      return { lat: initialLat, lng: initialLng };
    }
    return CAIRO_DEFAULT;
  }, [initialLat, initialLng]);

  const defaultCenter = getDefaultCenter();
  const [center, setCenter] = useState(defaultCenter);
  const [selectedPosition, setSelectedPosition] = useState(defaultCenter);

  useEffect(() => {
    if (isOpen) {
      const newCenter = getDefaultCenter();
      setCenter(newCenter);
      setSelectedPosition(newCenter);
      if (mapRef.current) {
        mapRef.current.setCenter(newCenter);
      }
    }
  }, [isOpen, getDefaultCenter]);

  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const updatePosition = useCallback(() => {
    if (!mapRef.current) return;
    const mapCenter = mapRef.current.getCenter();
    if (mapCenter) {
      const position = { lat: mapCenter.lat(), lng: mapCenter.lng() };
      setSelectedPosition(position);
      return position;
    }
    return null;
  }, []);

  return {
    mapRef,
    center,
    selectedPosition,
    defaultCenter,
    onMapLoad,
    updatePosition,
  };
}

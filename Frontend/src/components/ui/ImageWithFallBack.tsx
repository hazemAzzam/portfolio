"use client";

import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

interface ImageWithFallBackProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  onError?: () => void;
  onLoad?: () => void;
}

export function ImageWithFallBack({
  src,
  alt,
  width,
  height,
  className,
  fill = true,
  priority = false,
  quality = 75,
  sizes,
  placeholder = "empty",
  blurDataURL,
  onError,
  onLoad,
  ...props
}: ImageWithFallBackProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    onError?.();
  };

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  // If no width/height provided and not using fill, use default dimensions
  const imageWidth = width || 400;
  const imageHeight = height || 300;

  if (hasError) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-muted text-muted-foreground",
          className
        )}
        style={fill ? undefined : { width: imageWidth, height: imageHeight }}
      >
        <div className="flex flex-col items-center gap-2 p-4">
          <Image
            src={ERROR_IMG_SRC}
            alt="Error loading image"
            width={32}
            height={32}
            className="opacity-50"
          />
          <span className="text-xs">Failed to load image</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn("relative", className)}
      style={fill ? undefined : { width: imageWidth, height: imageHeight }}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded" />
      )}
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : imageWidth}
        height={fill ? undefined : imageHeight}
        fill={fill}
        priority={priority}
        quality={quality}
        sizes={sizes}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onError={handleError}
        onLoad={handleLoad}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        {...props}
      />
    </div>
  );
}

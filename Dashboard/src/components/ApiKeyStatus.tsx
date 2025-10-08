"use client";

import { useState, useEffect } from "react";
import { cookieUtils } from "@/lib/cookies";
import { Badge } from "@/components/ui/badge";

export default function ApiKeyStatus() {
  const [apiKeySource, setApiKeySource] = useState<"cookie" | "env" | "none">(
    "none"
  );

  useEffect(() => {
    setApiKeySource(cookieUtils.getApiKeySource());
  }, []);

  const getStatusColor = (source: string) => {
    switch (source) {
      case "cookie":
        return "bg-blue-500";
      case "env":
        return "bg-green-500";
      case "none":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (source: string) => {
    switch (source) {
      case "cookie":
        return "Using Cookie API Key";
      case "env":
        return "Using Environment API Key";
      case "none":
        return "No API Key Found";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">API Key:</span>
      <Badge className={getStatusColor(apiKeySource)}>
        {getStatusText(apiKeySource)}
      </Badge>
    </div>
  );
}

import React from "react";
import { InView } from "./in-view";

export default function DirectionalInView({
  children,
  direction,
}: {
  children: React.ReactNode;
  direction: "up" | "down" | "left" | "right";
}) {
  if (direction === "up") {
    return (
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </InView>
    );
  }
  if (direction === "down") {
    return (
      <InView
        variants={{
          hidden: { opacity: 0, y: -100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px 200px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </InView>
    );
  }
  if (direction === "left") {
    return (
      <InView
        variants={{
          hidden: { opacity: 0, x: -100, filter: "blur(4px)" },
          visible: { opacity: 1, x: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px 0px -200px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </InView>
    );
  }
  if (direction === "right") {
    return (
      <InView
        variants={{
          hidden: { opacity: 0, x: 100, filter: "blur(4px)" },
          visible: { opacity: 1, x: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px 0px 200px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </InView>
    );
  }
  return (
    <InView
      variants={{
        hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      viewOptions={{ margin: "0px 0px -200px 0px" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </InView>
  );
}

import { cn } from "@/lib/utils";
import React from "react";

interface SectionDividerProps {
  width?: string;
  className?: string;
}

export function SectionDivider({ width = "w-24", className }: SectionDividerProps) {
  return (
    <div
      className={cn(
        "h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent",
        width,
        className
      )}
    />
  );
}

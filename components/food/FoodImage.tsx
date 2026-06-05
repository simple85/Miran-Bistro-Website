"use client";

import { useState } from "react";
import FoodArt from "./FoodArt";
import type { FoodArt as FoodArtName } from "@/lib/menu";

// Best-effort photo URLs from the Unsplash CDN. If a URL fails to load the
// component falls back to the crafted SVG illustration, so a broken or stale
// ID degrades gracefully instead of leaving an empty slot.
const PHOTOS: Partial<Record<FoodArtName, string>> = {
  pizza:
    "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=900&auto=format&fit=crop&q=80",
  burger:
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&auto=format&fit=crop&q=80",
  fries:
    "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=900&auto=format&fit=crop&q=80",
  doner:
    "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=900&auto=format&fit=crop&q=80",
  durum:
    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=900&auto=format&fit=crop&q=80",
  donerplate:
    "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=900&auto=format&fit=crop&q=80",
  lahmacun:
    "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=900&auto=format&fit=crop&q=80",
  pide:
    "https://images.unsplash.com/photo-1601001815853-3835d9b51bf6?w=900&auto=format&fit=crop&q=80",
  currywurst:
    "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=900&auto=format&fit=crop&q=80",
  falafel:
    "https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?w=900&auto=format&fit=crop&q=80",
  kofte:
    "https://images.unsplash.com/photo-1626082929543-5bab6f0fc8c4?w=900&auto=format&fit=crop&q=80",
  nuggets:
    "https://images.unsplash.com/photo-1562967914-608f82629710?w=900&auto=format&fit=crop&q=80",
  salad:
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&auto=format&fit=crop&q=80",
  wings:
    "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=900&auto=format&fit=crop&q=80",
};

type Props = {
  name: FoodArtName;
  className?: string;
  alt?: string;
};

export default function FoodImage({ name, className, alt }: Props) {
  const [failed, setFailed] = useState(false);
  const url = PHOTOS[name];

  if (!url || failed) {
    return <FoodArt name={name} className={className} />;
  }

  return (
    <div
      className={`relative aspect-square overflow-hidden rounded-full bg-charcoal-700 shadow-inner ${className ?? ""}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={url}
        alt={alt ?? name}
        loading="lazy"
        onError={() => setFailed(true)}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}

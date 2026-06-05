"use client";

import { useState } from "react";
import FoodArt from "./FoodArt";
import { asset } from "@/lib/asset";
import type { FoodArt as FoodArtName } from "@/lib/menu";

// Default photo per art kind, used by the hero floaters, the scroll showcase
// and any menu item that doesn't supply its own `image` override. All files
// live in /public/food and are bundled with the site.
const DEFAULT_PHOTOS: Partial<Record<FoodArtName, string>> = {
  doner: "/food/doner.png",
  durum: "/food/durum.png",
  donerplate: "/food/doener-teller.png",
  burger: "/food/cheeseburger.png",
  pizza: "/food/pizza-magherita.png",
  fries: "/food/pommes.webp",
  lahmacun: "/food/Lahmacun.png",
  pide: "/food/pide-hackfleisch.png",
  currywurst: "/food/currywurst.png",
  falafel: "/food/falafel-portion.png",
  kofte: "/food/kofte-teller.png",
  nuggets: "/food/nuggets.webp",
  wings: "/food/Chicken_Wings.png",
};

type Props = {
  name: FoodArtName;
  /** Override the default photo for this art kind. */
  src?: string;
  /** Scale factor for source images with extra padding around the food. */
  zoom?: number;
  className?: string;
  alt?: string;
};

export default function FoodImage({ name, src, zoom, className, alt }: Props) {
  const [failed, setFailed] = useState(false);
  const raw = src ?? DEFAULT_PHOTOS[name];

  if (!raw || failed) {
    return <FoodArt name={name} className={className} />;
  }

  const url = raw.startsWith("http") ? raw : asset(raw);

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
        style={zoom ? { transform: `scale(${zoom})` } : undefined}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}

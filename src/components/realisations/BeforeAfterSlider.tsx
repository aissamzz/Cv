"use client";

import { useState } from "react";

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
      <div className="absolute inset-0 flex items-center justify-center bg-mist-300 text-sm font-medium text-ink/50">
        Après
      </div>
      <div
        className="absolute inset-0 flex items-center justify-center bg-ink text-sm font-medium text-paper/70"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        Avant
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label="Comparer avant / après"
        className="absolute inset-x-0 bottom-3 mx-auto w-2/3 accent-forest-500"
      />
    </div>
  );
}

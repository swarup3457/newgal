import React from "react";
import ComponentCard from "./ComponentCard";

export default function GalleryGrid({ items, onColorSelect }) {
  if (!items.length) return null;
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((m) => (
        <ComponentCard key={m.id} meta={m} onColorSelect={onColorSelect} />
      ))}
    </div>
  );
}

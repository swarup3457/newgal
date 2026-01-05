import React from "react";

/**
 * This demo emits color selection via onColorSelect prop if provided.
 * If the parent app passes setAppColor, that demonstrates lifting state.
 */
export default function ColorPickerDemo({ onColorSelect }) {
  const colors = ["#EF4444", "#F59E0B", "#10B981", "#3B82F6", "#8B5CF6"];
  return (
    <div className="flex gap-2">
      {colors.map((c) => (
        <button
          key={c}
          aria-label={`Pick color ${c}`}
          onClick={() => onColorSelect?.(c)}
          className="w-8 h-8 rounded-full border"
          style={{ background: c }}
        />
      ))}
    </div>
  );
}

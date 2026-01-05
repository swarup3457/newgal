import React from "react";

const CATEGORIES = ["All", "Buttons", "Forms", "Cards", "Data Display"];

export default function FilterButtons({ active, onChange }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-3 py-1 rounded text-sm ${
            active === cat ? "bg-brand-500 text-white" : "bg-gray-100"
          }`}
          aria-pressed={active === cat}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

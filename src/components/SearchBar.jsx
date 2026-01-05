import React from "react";

export default function SearchBar({ value, onChange, placeholder = "Search components..." }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="px-3 py-2 border rounded w-full md:w-64"
      aria-label="search components"
    />
  );
}

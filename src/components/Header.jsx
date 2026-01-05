import React from "react";

export default function Header({ title = "Interactive Component Gallery" }) {
  return (
    <header className="py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="text-sm text-gray-600">Module 2 Capstone</div>
      </div>
    </header>
  );
}

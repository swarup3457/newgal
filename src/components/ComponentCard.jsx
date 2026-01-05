import React from "react";
import registry from "../demos/registry";

export default function ComponentCard({ meta, onColorSelect }) {
  const Demo = registry[meta.demoType] || (() => <div>Demo missing</div>);
  return (
    <article className="p-4 bg-white rounded card-shadow h-full flex flex-col">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold">{meta.name}</h3>
          <p className="text-xs text-gray-500">{meta.description}</p>
        </div>
        <span className="text-xs px-2 py-0.5 rounded bg-gray-100">{meta.category}</span>
      </div>

      <div className="mt-3 flex-1 flex items-center justify-center">
        {/* demo area */}
        <div className="w-full">
          <Demo onColorSelect={onColorSelect} />
        </div>
      </div>

      <div className="mt-3 flex justify-end">
        <button className="text-sm px-3 py-1 rounded bg-gray-100">Open</button>
      </div>
    </article>
  );
}

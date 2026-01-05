import React from "react";

export default function NoResults({ onReset }) {
  return (
    <div className="text-center py-20">
      <div className="text-lg font-semibold">No results</div>
      <div className="text-sm text-gray-600 mt-2">Try clearing your search or filters.</div>
      <div className="mt-4">
        <button onClick={onReset} className="px-3 py-1 rounded bg-brand-500 text-white">Reset</button>
      </div>
    </div>
  );
}

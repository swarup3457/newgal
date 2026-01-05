import React, { useState } from "react";

export default function CardDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <div className="p-2 border rounded">
        <div className="flex justify-between items-start">
          <div>
            <div className="font-semibold">Card Title</div>
            <div className="text-sm text-gray-600">Short preview content goes here.</div>
          </div>
          <button onClick={() => setOpen((v) => !v)} className="text-sm px-2 py-1 rounded bg-gray-100">
            {open ? "Hide" : "Show"}
          </button>
        </div>
        {open && (
          <div className="mt-2 text-sm text-gray-700">
            Expanded content: demonstrates conditional rendering inside a card. You can place more UI here.
          </div>
        )}
      </div>
    </div>
  );
}

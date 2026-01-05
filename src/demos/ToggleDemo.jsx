import React, { useState } from "react";

export default function ToggleDemo() {
  const [on, setOn] = useState(false);
  return (
    <div className="flex items-center gap-3">
      <button
        aria-pressed={on}
        onClick={() => setOn((v) => !v)}
        className={`px-3 py-1 rounded ${on ? "bg-green-400 text-white" : "bg-gray-200"}`}
      >
        {on ? "On" : "Off"}
      </button>
      <div className="text-sm">{on ? "State: ON" : "State: OFF"}</div>
    </div>
  );
}

import React from "react";

export default function ResultCounter({ showing, total }) {
  return (
    <div className="text-sm text-gray-600">
      Showing <span className="font-medium">{showing}</span> of <span className="font-medium">{total}</span> components
    </div>
  );
}

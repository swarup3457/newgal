import React, { useState, useEffect } from "react";

export default function TodoListDemo() {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem("demo_todos_v1");
      return raw ? JSON.parse(raw) : ["Buy milk"];
    } catch (e) {
      return ["Buy milk"];
    }
  });
  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("demo_todos_v1", JSON.stringify(items));
  }, [items]);

  const add = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setItems((s) => [...s, text.trim()]);
    setText("");
  };

  const removeAt = (idx) => setItems((s) => s.filter((_, i) => i !== idx));

  return (
    <div>
      <form onSubmit={add} className="flex gap-2">
        <input value={text} onChange={(e) => setText(e.target.value)} className="px-2 rounded border" placeholder="New todo" />
        <button className="px-2 py-1 rounded bg-brand-500 text-white">Add</button>
      </form>
      <ul className="mt-2 space-y-1">
        {items.map((it, i) => (
          <li key={i} className="flex justify-between items-center px-2 py-1 border rounded">
            <span>{it}</span>
            <button onClick={() => removeAt(i)} className="text-xs px-2 py-0.5 rounded bg-red-200">Remove</button>
          </li>
        ))}
        {items.length === 0 && <li className="text-sm text-gray-500">No items</li>}
      </ul>
    </div>
  );
}

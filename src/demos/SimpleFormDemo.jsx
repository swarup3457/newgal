import React, { useState } from "react";

export default function SimpleFormDemo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errors = {};
    if (!name.trim()) errors.name = "Name is required";
    if (!email.trim()) errors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = "Invalid email";
    return errors;
  };

  const errors = validate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true });
    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
      // show a tiny demo success feedback
      setTimeout(() => {
        setName("");
        setEmail("");
        setSubmitted(false);
        setTouched({});
      }, 1200);
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-2">
        <label className="text-sm">Name</label>
        <input
          aria-label="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, name: true }))}
          className="px-2 py-1 border rounded"
        />
        {touched.name && errors.name && <div className="text-xs text-red-600">{errors.name}</div>}

        <label className="text-sm mt-2">Email</label>
        <input
          aria-label="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, email: true }))}
          className="px-2 py-1 border rounded"
        />
        {touched.email && errors.email && <div className="text-xs text-red-600">{errors.email}</div>}

        <div className="pt-2">
          <button type="submit" className="px-3 py-1 rounded bg-brand-500 text-white">
            {submitted ? "Submitted!" : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
}

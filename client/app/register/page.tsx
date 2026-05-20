"use client";

import { ChangeEvent, useState } from "react";

function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const formHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(form);

  return (
    <div>
      <input
        onChange={formHandler}
        name="name"
        placeholder="name"
        type="text"
      />
      <input
        onChange={formHandler}
        name="email"
        placeholder="email"
        type="text"
      />
      <input
        onChange={formHandler}
        name="password"
        placeholder="password"
        type="text"
      />
      <button>Sign Up</button>
    </div>
  );
}

export default RegisterPage;

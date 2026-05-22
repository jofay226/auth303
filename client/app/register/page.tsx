"use client";

import { ChangeEvent, useState } from "react";
import axios from "axios";

function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const formHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const registerHandler = async () => {
    const res = await axios.post("http://localhost:4000/auth/register", form);
    console.log(res);
  };

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
      <button onClick={registerHandler}>Sign Up</button>
    </div>
  );
}

export default RegisterPage;

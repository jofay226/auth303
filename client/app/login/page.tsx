"use client";

import { ChangeEvent, useState } from "react";
import axios from "axios";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

function LoginPage() {
  const router = useRouter();
  const saveToken = useAuthStore((state) => state.actions.saveToken);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const formHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const loginHandler = async () => {
    const res = await axios.post("http://localhost:4000/auth/login", form, {
      withCredentials: true,
    });
    if (res.status === 200) {
      saveToken(res.data);
      router.push("/");
    }
  };

  return (
    <div>
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
      <button onClick={loginHandler}>Sign In</button>
    </div>
  );
}

export default LoginPage;

"use client";
import { useAuthStore } from "@/store/authStore";

export default function Home() {
  const accessToken = useAuthStore((state) => state.accessToken);
  console.log(accessToken);

  return <>PROTECTED PAGE PROFILE PAGE</>;
}

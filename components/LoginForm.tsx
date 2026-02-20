"use client";

import { Card, Label, TextInput } from "flowbite-react";
import { LoginButton } from "./Buttons";
import { loginHandler } from "@/lib/supabase";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = await loginHandler.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setError("Login failed!");
    else router.push("/admin");
  };

  return (
    <div className="">
      <Card>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <Label>Email</Label>
            <TextInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email here..."
            />
            <Label>Password</Label>
            <TextInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password here"
            />
            <LoginButton className="mt-2">Log in!</LoginButton>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default LoginForm;

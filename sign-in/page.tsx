"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [email, setEmail] = useState(""); const [password, setPassword] = useState(""); const router = useRouter();
  return (
    <div className="card max-w-sm mx-auto">
      <h1 className="text-xl font-semibold mb-4">Anmelden</h1>
      <label className="label">Email</label>
      <input className="input mb-3" value={email} onChange={e=>setEmail(e.target.value)} />
      <label className="label">Passwort</label>
      <input className="input mb-6" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button className="btn btn-primary w-full" onClick={async ()=>{
        const res = await signIn("credentials", { redirect: false, email, password });
        if (res?.ok) router.push("/discover"); else alert("Login fehlgeschlagen");
      }}>Anmelden</button>
    </div>
  );
}

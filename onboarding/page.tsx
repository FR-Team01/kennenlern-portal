"use client";
import { useState } from "react";
export default function OnboardingPage() {
  const [displayName, setDisplayName] = useState(""); const [bio, setBio] = useState("");
  return (
    <div className="card">
      <h1 className="text-2xl font-semibold mb-4">Onboarding</h1>
      <div className="grid gap-3 max-w-lg">
        <label className="label">Anzeigename</label>
        <input className="input" value={displayName} onChange={e=>setDisplayName(e.target.value)} />
        <label className="label mt-3">Kurzbio</label>
        <textarea className="input min-h-[120px]" value={bio} onChange={e=>setBio(e.target.value)} />
        <button className="btn btn-primary mt-4">Speichern (Stub)</button>
      </div>
    </div>
  );
}

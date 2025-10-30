"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
type Card = { id: string; name: string; bio: string };
const MOCK: Card[] = [
  { id: "1", name: "Alex", bio: "Kaffee, Bücher, Reisen" },
  { id: "2", name: "Sam", bio: "Kochen & Klettern" },
  { id: "3", name: "Jamie", bio: "Fotografie und Hunde" }
];
export default function DiscoverPage() {
  const [cards, setCards] = useState<Card[]>([]);
  useEffect(()=>{ setCards(MOCK); }, []);
  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-semibold">Discover</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {cards.map(c => (
          <div key={c.id} className="card">
            <div className="h-40 bg-gray-100 rounded-xl mb-3" />
            <div className="font-medium">{c.name}</div>
            <div className="text-gray-600 text-sm mb-3">{c.bio}</div>
            <div className="flex gap-2">
              <button className="btn">Überspringen</button>
              <button className="btn btn-primary">Gefällt mir</button>
              <Link className="btn" href={`/chat/${c.id}`}>Chat (Stub)</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

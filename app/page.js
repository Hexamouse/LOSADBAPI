"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HeroCard from "./components/HeroCard";

export default function Home() {
  const [heroes, setHeroes] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchHeroes = async () => {
      const response = await fetch("/api/heroes");
      const data = await response.json();
      setHeroes(data);
    };

    fetchHeroes();
  }, []);

  const handleViewClick = (id) => {
    router.push(`/heroes/${id}`);
  };

  return (
    <div className="bg-[#353535] min-h-screen p-8">
      <h1 className="text-5xl font-extrabold text-[#ffffff] text-center mb-12">
        Lost Saga XYZ
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} onViewClick={handleViewClick} />
        ))}
      </div>
    </div>
  );
}

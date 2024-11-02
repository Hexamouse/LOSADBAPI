"use client";

import Image from "next/image";

const HeroCard = ({ hero, onViewClick }) => {
  return (
    <div className="bg-[#2A2A2A] rounded-lg shadow-lg transition-transform transform hover:scale-105 overflow-hidden mx-auto w-full">
      <div className="flex items-center p-4">
        <div className="relative">
          <Image
            src={hero.image_thumb_male}
            alt={hero.name}
            width={120}
            height={120}
            className="rounded-lg shadow-md"
          />
          <span className="absolute top-1 left-1 bg-[#1E90FF] text-white text-xs font-semibold py-1 px-2 rounded-full">
            #{hero.id}
          </span>
        </div>
        <div className="ml-4 flex-1">
          <h2 className="text-xl font-semibold text-[#FFFFF] mb-1">{hero.name}</h2>
          <div className="border border-[#1E90FF] bg-[#E0F7FF] rounded-md p-2 mb-2">
            <p className="text-sm text-[#555555] text-center">{hero.type}</p>
          </div>
          <div className="border border-[#32CD32] bg-[#E6FFED] rounded-md p-2 mb-2">
            <p className="text-sm text-[#555555] text-center">{hero.genre}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <button
          onClick={() => onViewClick(hero.id)}
          className="bg-[#08A170] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#0BBF7A] transition duration-200 w-4/5"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default HeroCard;
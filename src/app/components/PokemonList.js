"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

import { Luckiest_Guy } from "next/font/google";

const luckiestGuy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });

export default function PokemonList({ pokemons }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter Pokémon by search term
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-[1536px] mx-auto px-[1rem] md:px-[2rem] lg:px-[3rem] xl:px-[4rem] py-10">
      {/* Title */}
      <h1
        className={`text-[4rem] drop-shadow-[3px_3px_0px_rgb(47,110,180)] font-bold text-center text-yellow-400 
           font-luckiest-guy ${luckiestGuy.className} mb-6`}
      >
        Explore Pokémon
      </h1>

      {/* Search Bar */}
      <div className="flex items-center bg-white shadow-md rounded-full px-4 py-2 w-full max-w-xl mx-auto">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search Pokémon..."
          className="ml-2 w-full outline-none text-gray-700"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Pokémon Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
        {filteredPokemons.length > 0 ? (
          filteredPokemons.map((pokemon, index) => {
            const pokemonId = pokemon.url.split("/")[6];
            console.log('Pokemon ID', pokemonId);
            return (
              <Link key={pokemonId} href={`/pokemon/${pokemonId}`}>
                <div
                  className="group bg-yellow-300 p-4 rounded-lg 
                hover:shadow-xl transition-all duration-300 ease-in-out 
                transform hover:-translate-y-1  hover:-translate-x-1  cursor-pointer text-center"
                >
                  {console.log('Pokemon', pokemon)}
                  {/* <div className="relative w-24 h-24 mx-auto">
                    <Image
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                      alt={pokemon.name}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div> */}
                  {/* Pokémon Name */}
                  <p
                    className={`${luckiestGuy.className} mt-2 text-xl font-semibold capitalize text-[rgb(47,110,180)] group-hover:text-`}
                  >
                    {pokemon.name}
                  </p>
                </div>
              </Link>
            );
          })
        ) : (
          <p className="text-center text-gray-500 mt-4">No Pokémon found</p>
        )}
      </div>
    </div>
  );
}

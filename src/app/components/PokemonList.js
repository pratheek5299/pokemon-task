"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Luckiest_Guy, Bangers } from "next/font/google";
import Link from "next/link";

const luckiestGuy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
const bangers = Bangers({ subsets: ["latin"], weight: ["400"] });

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const toastId = toast.loading("Fetching the pokemon data...");
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
        );
        if (!response.ok) {
          toast.error("Failed to fetch the pokemon data", { id: toastId });
        }
        const data = await response.json();
        console.log("Pokemon data: ", data.results);
        setPokemonList(data.results);
        toast.success("Successfully fetched the pokemon data", { id: toastId });
      } catch (error) {
        console.log("Error while fetching the pokemon data: ", error);
        toast.error("Failed to fetch the pokemon data", { id: toastId });
      }
    };

    fetchPokemonData();
  }, []);

  return (
    <div className="max-w-[1536px] mx-auto px-[1rem] md:px-[2rem] lg:px-[3rem] xl:px-[4rem] py-10">
      <Toaster />
      <h1
        className={`${luckiestGuy.className}  text-[4rem] text-[#ffcb06] drop-shadow-[4px_4px_0px_rgb(48,109,179)]  text-center `}
      >
        Explore the Pokemon
      </h1>
      <div className="text-right bg-[red] w-fit ml-auto px-4 py-2">
        <input placeholder="Search your pokemon" className=" bg-[green] " />
      </div>
      <div className="grid py-10 grid-cols-6 gap-4 ">
        {pokemonList.map((pokemon, index) => (
          <div
            className=" bg-yellow-400 hover:shadow-[2px_4px_5px_2px_rgb(48,109,179)] flex items-center justify-center
             rounded-[12px] transition-all hover:-translate-x-2 cursor-pointer hover:-translate-y-2 duration-300 
             ease-in-out p-6 capitalize"
            key={index}
          >
            <Link href={`/pokemon/${index + 1}`}>
              <p className={`${bangers.className} text-[18px]`}>
                {pokemon.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Luckiest_Guy } from "next/font/google";

const luckiestGuy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });

// Pre-generate pages for the first 151 Pokémon (Gen 1)
export async function generateStaticParams() {
  return Array.from({ length: 151 }, (_, i) => ({ id: (i + 1).toString() }));
}

// Fetch Pokémon data
async function fetchPokemonData(id) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!res.ok) throw new Error("Failed to fetch Pokémon data");
    return await res.json();
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    return null;
  }
}

export default async function PokemonPage({ params }) {
  // ✅ Await `params`
  const awaitedParams = await params;
  const id = awaitedParams.id;

  const pokemon = await fetchPokemonData(id);

  if (!pokemon) {
    return (
      <div className="text-center text-red-500 text-xl p-6">
        Failed to load Pokémon data. Please try again later.
      </div>
    );
  }

  const imageSrc =
    pokemon.sprites?.other?.["official-artwork"]?.front_default ||
    "/fallback-image.png";

  return (
    <div className="max-w-[1536px] mx-auto p-6 bg-white rounded-lg">
      <Link href="/" className="inline-block mb-4">
        <button className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
          Back to List
        </button>
      </Link>

      <h1
        className={`text-4xl font-bold text-center ${luckiestGuy.className} drop-shadow-[3px_3px_0px_rgb(47,110,180)] text-yellow-500 capitalize`}
      >
        {pokemon.name}
      </h1>

      <div className="relative w-48 h-48 mx-auto my-4">
        <Image
          src={imageSrc}
          alt={pokemon.name}
          width={192}
          height={192}
          priority
          className="drop-shadow-lg"
        />
      </div>

      <div className="flex justify-center space-x-3 mt-4">
        {pokemon.types?.map((typeInfo) => (
          <span
            key={typeInfo.type.name}
            className="bg-gradient-to-r capitalize from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm shadow-lg"
          >
            {typeInfo.type.name}
          </span>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800">Abilities</h2>
      <ul className="mt-2 text-gray-700 flex gap-2">
        {pokemon.abilities?.map((abilityInfo) => (
          <li
            key={abilityInfo.ability.name}
            className="capitalize bg-blue-800 text-white px-4 py-2 rounded-md shadow"
          >
            {abilityInfo.ability.name}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800">Stats</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
        {pokemon.stats?.map((stat) => (
          <div
            key={stat.stat.name}
            className="p-3 bg-gray-100 rounded-lg shadow-md transform hover:-translate-y-2 transition-all duration-200 ease-in-out"
          >
            <p className="font-semibold capitalize text-gray-700">
              {stat.stat.name}
            </p>
            <p className="text-xl font-bold text-blue-600">{stat.base_stat}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

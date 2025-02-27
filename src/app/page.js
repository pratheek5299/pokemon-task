import PokemonList from "./components/PokemonList";

export default async function HomePage() {
  try {
    // Fetch Pokémon data with caching for optimal SSG performance
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0",
      {
        cache: "force-cache", // Ensures the request is cached for SSG
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch Pokémon data: ${res.statusText}`);
    }

    const data = await res.json();

    return <PokemonList pokemons={data.results} />;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);

    return (
      <div className="flex items-center justify-center h-screen text-red-500 text-xl">
        Failed to load Pokémon data. Please try again later.
      </div>
    );
  }
}

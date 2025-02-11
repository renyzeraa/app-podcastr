import { Player } from "@/components/player";

export default async function Home() {
  const response = await fetch("http://localhost:3333/episodes", {
    cache: "force-cache",
    next: { revalidate: 28800 }
  });
  const episodes = await response.json();
  console.log(episodes);
  return (
    <main>
      <Player />
    </main>
  );
}
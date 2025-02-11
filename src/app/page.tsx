import { Player } from "@/components/player";
import { api } from "@/services/api";

type File = {
  url: string
  type: string
  duration: number
}

type Episode = {
  id: string
  title: string
  members: string
  published_at: string
  thumbnail: string
  description: string
  file: File
}

type HomeProps = {
  episodes: Episode[]
}

export default async function Home() {
  const { data } = await api.get("episodes", {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  });
  console.log(data);
  return (
    <main>
      <Player />
    </main>
  );
}
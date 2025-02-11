import { Header } from "@/components/header";
import { Player } from "@/components/player";
import { api } from "@/services/api";
import { filterEpisodesResponseData } from "@/utils/convert";
import styles from '../styles/app.module.scss'
import { Main } from "@/components/main";

type File = {
  url: string
  type: string
  duration: number
}

export type EpisodeInput = {
  id: string
  title: string
  members: string
  published_at: string
  thumbnail: string
  description: string
  file: File
}

export type Episode = {
  description: string
  duration: number
  url: string
  id: string
  members: string
  publishedAt: string
  thumbnail: string
  title: string
  durationAsString: string
}

export default async function Home() {
  const { data } = await api.get("episodes", {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  });
  const episodes: Episode[] = (data as EpisodeInput[]).map(filterEpisodesResponseData)

  return (
    <div className={styles.wrapper}>
      <Header />
      <Main episodes={episodes} />
      <Player />
    </div>
  );
}
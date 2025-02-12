import { Header } from "@/components/header";
import { Player } from "@/components/player";
import { api } from "@/services/api";
import { filterEpisodesResponseData } from "@/utils/convert";
import styles from '../styles/app.module.scss'
import { Main } from "@/components/main";
import type { Episode, EpisodeInput } from "@/@types/episode";

export default async function Home() {
  const { data } = await api.get("episodes", {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  });
  const episodes: Episode[] = (data as EpisodeInput[]).map(filterEpisodesResponseData)
  const latestEpisodes: Episode[] = episodes.slice(0, 2);
  const allEpisodes: Episode[] = episodes.slice(2, episodes.length)
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main allEpisodes={allEpisodes} latestEpisodes={latestEpisodes} />
      <Player />
    </div>
  );
}
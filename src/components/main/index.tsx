import { Episode } from '@/app/page'
import styles from './styles.module.scss'
import Image from 'next/image'

interface MainProps {
  latestEpisodes: Episode[]
  allEpisodes: Episode[]
}

export function Main({ latestEpisodes, allEpisodes }: MainProps) {
  return (
    <div className={styles.main}>
      <section className={styles.latestEpisodes}>
        <h2>Últimos Lançamentos</h2>
        <ul>
          {latestEpisodes.map(episode => (
            <li key={episode.id}>
              <Image objectFit='cover' src={episode.thumbnail} alt={episode.title} width={192} height={192} />
              <div className={styles.episodeDetails}>
                <a href="" title={episode.title}>{episode.title}</a>
                <p title={episode.members}>{episode.members}</p>
                <span>{episode.publishedAt}</span>
                <span>{episode.durationAsString}</span>
              </div>
              <button type='button'><Image src="play-green.svg" alt="Tocar episódio" width={24} height={24} /></button>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.allEpisodes}>
      </section>
    </div>
  )
}
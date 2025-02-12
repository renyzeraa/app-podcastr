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
        <h2>Todos episódios</h2>
        <table cellSpacing={0}>
          <thead>
            <tr>
              <th></th>
              <th>Podcast</th>
              <th>Integrantes</th>
              <th>Data</th>
              <th>Duração</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allEpisodes.map(episode => (
              <tr key={episode.id}>
                <td width={72}>
                  <Image
                    alt={episode.title}
                    src={episode.thumbnail}
                    width={128}
                    height={128}
                    objectFit='cover'
                  />
                </td>
                <td><a href="">{episode.title}</a></td>
                <td>{episode.members}</td>
                <td width={110}>{episode.publishedAt}</td>
                <td>{episode.durationAsString}</td>
                <td>
                  <button type='button'>
                    <img src="play-green.svg" alt="Tocar episódio" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}
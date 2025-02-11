import { Episode } from '@/app/page'
import styles from './styles.module.scss'

export function Main({ episodes }: { episodes: Episode[] }) {
  return (
    <div className={styles.main}>
      {JSON.stringify(episodes)}
    </div>
  )
}
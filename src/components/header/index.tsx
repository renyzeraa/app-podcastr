import { ptBR } from 'date-fns/locale'
import styles from './styles.module.scss'
import { format } from 'date-fns'

export function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMM', {
    locale: ptBR,
  }).toString()
  return (
    <header className={styles.headerContainer}>
      <img src="./logo.svg" alt="Logo" />

      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>
    </header>
  )
}
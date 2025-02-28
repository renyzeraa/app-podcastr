import '../styles/global.scss'

import { Header } from '../components/Header'
import { Player } from '../components/Player';

import styles from '../styles/app.module.scss';
import { PlayerContextProvider } from '../contexts/PlayerContext';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextProvider>
  )
}

export default MyApp

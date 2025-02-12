import { EpisodeInput } from "@/@types/episode"
import { format, parseISO } from "date-fns"
import { ptBR } from "date-fns/locale"

export function convertDurationToTimeString(duration: number) {
  const hours = Math.floor(duration / 3600)
  const minutes = Math.floor((duration % 3600) / 60)
  const seconds = duration % 60

  const timeString = [hours, minutes, seconds].map(time => String(time).padStart(2, '0')).join(':')
  return timeString
}

export function filterEpisodesResponseData({ description, file, id, members, published_at, thumbnail, title }: EpisodeInput) {
  return {
    description,
    duration: Number(file.duration),
    url: file.url,
    id,
    members,
    publishedAt: format(parseISO(published_at), 'd MMM yy', { locale: ptBR }),
    thumbnail,
    title,
    durationAsString: convertDurationToTimeString(Number(file.duration))
  }
}
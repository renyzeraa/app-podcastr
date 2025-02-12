export type File = {
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
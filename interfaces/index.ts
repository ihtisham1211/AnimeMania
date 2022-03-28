// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export interface Anime {
  title: string
  img: string
  synopsis: string
  genres: string[]
  released: number
  status: string
  otherName: string
  totalEpisodes: number
  episodes: { id: string }
}

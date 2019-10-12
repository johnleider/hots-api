interface Player {
  battletag: string
  hero: string
  hero_level: number
  team: number
  winner: boolean
  blizz_id: number
  silenced: boolean
  party: number
  talents: Talent[]
  score: Score
}

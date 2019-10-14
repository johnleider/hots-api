import { Ability } from './ability'
import { Talent } from './talent'
export interface Hero {
  name: string
  short_name: string
  attribute_id: string
  c_hero_id: string
  c_unit_Id: string
  translations: string[]
  icon_url: Record<string, string>
  role: string
  type: string
  release_Date: string
  release_patch: string
  abilities: Ability[]
  talents: Talent[]
}

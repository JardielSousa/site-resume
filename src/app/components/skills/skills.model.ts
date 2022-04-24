export interface Skills {
  frontend: SkillsItem[]
  backend: SkillsItem[]
  others: string[]
}

interface SkillsItem {
  description: string
  percent: string
}

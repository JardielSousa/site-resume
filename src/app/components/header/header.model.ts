export interface Header {
  name: string
  occupation: string
  email: string
  phone: string
  socials: HeaderSocial[]
}

interface HeaderSocial {
  link: string
  icon: string
  description: string
}

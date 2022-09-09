/*
 * @FilePath: /nx-docs-next/.vitepress/contributors.ts
 * @author: Wibus
 * @Date: 2022-09-09 23:06:03
 * @LastEditors: Wibus
 * @LastEditTime: 2022-09-09 23:54:24
 * Coding With IU
 */
import contributorNames from './contributor-names.json'

export interface Contributor {
  name: string
  avatar: string
}

export interface SocialEntry {
  icon: string
  link: string
}

export interface CoreTeam {
  avatar: string
  name: string
  // required to download avatars from GitHub
  github: string
  twitter?: string
  sponsor?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
}

const contributorsAvatars: Record<string, string> = {}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const contributors = (contributorNames as string[]).reduce((acc, name) => {
  contributorsAvatars[name] = getAvatarUrl(name)
  acc.push({ name, avatar: `https://github.com/${name}.png` })
  return acc
}, [] as Contributor[])

const createLinks = (tm: CoreTeam): CoreTeam => {
  tm.links = [
    { icon: 'github', link: `https://github.com/${tm.github}` },
  ]
  return tm
}

const plainTeamMembers: CoreTeam[] = [
  {
    avatar: `https://github.com/wibus-wee.png`,
    name: 'Wibus',
    github: 'wibus-wee',
    twitter: 'wibus_wee',
    // sponsor: 'https://github.com/sponsors/antfu',
    title: '🇨🇳 Uaena / 15 yo. / FSD (like) / Personal Piano Player & Singer',
    desc: 'Core team member & Organizer of NEXT',
  },
  {
    avatar: `https://github.com/MYXXTS.png`,
    name: 'MYXXTS',
    github: 'MYXXTS',
    title: '珍藏于心底的时光，是记忆深处最美的花',
    desc: 'NEXT\'s RFC review member & Project Designer'

  },
  {
    avatar: `https://github.com/ttimochan.png`,
    name: 'ttimochan',
    github: 'ttimochan',
  },
  {
    avatar: `https://github.com/origami-tech.png`,
    name: 'Origami',
    github: 'origami-tech',
  },

]

const teamMembers = plainTeamMembers.map(tm => createLinks(tm))

export { teamMembers }
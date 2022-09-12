/*
 * @FilePath: /mog-docs/.vitepress/contributors.ts
 * @author: Wibus
 * @Date: 2022-09-09 23:06:03
 * @LastEditors: Wibus
 * @LastEditTime: 2022-09-12 16:27:29
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
    desc: 'Mog 核心开发者 & 核心组织者',
  },
  {
    avatar: `https://github.com/MYXXTS.png`,
    name: 'MYXXTS',
    github: 'MYXXTS',
    title: '珍藏于心底的时光，是记忆深处最美的花',
    desc: 'Mog RFC 主要审核者 & 项目设计者',

  },
  {
    avatar: `https://github.com/ttimochan.png`,
    name: 'ttimochan',
    github: 'ttimochan',
    title: "Let's start learning !",
    desc: 'Mog 和 Mix-Space 文档作者与 PR 审核者',
  },
  {
    avatar: `https://github.com/origami-tech.png`,
    name: 'Origami',
    github: 'origami-tech',
    desc: 'Mog 核心协助开发者 & 项目重要赞助者'
  },
  {
    avatar: `https://github.com/reborn1028.png`,
    name: 'Guaguamiao',
    github: 'reborn1028',
    desc: 'Mog 核心协助开发者 & 主业 C# 开发者'
  },
  {
    avatar: `https://q1.qlogo.cn/g?b=qq&nk=80360650&s=100`,
    name: 'Rils_s',
    github: 'iRoZhi',
    title: 'If people are ambitious, everything can be done!',
    desc: 'Mog 项目重要赞助者'
  }

]

const teamMembers = plainTeamMembers.map(tm => createLinks(tm))

export { teamMembers }
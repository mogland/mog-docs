/*
 * @FilePath: /mog-docs/.vitepress/contributors.ts
 * @author: Wibus
 * @Date: 2022-09-09 23:06:03
 * @LastEditors: Wibus
 * @LastEditTime: 2022-09-30 23:15:59
 * Coding With IU
 */
import { SocialLink } from '@vue/theme'
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
  links?: SocialLink[]
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
  tm.twitter && tm.links.push({ icon: 'twitter', link: `https://twitter.com/${tm.twitter}` })
  return tm
}

const plainTeamMembers: CoreTeam[] = [
  {
    avatar: `https://github.com/wibus-wee.png`,
    name: 'Wibus',
    github: 'wibus-wee',
    twitter: 'wibus_wee',
    // sponsor: 'https://github.com/sponsors/antfu',
    title: '🇨🇳 Uaena / FSD (like) / Personal Piano Player & Singer',
    desc: 'Mog 核心开发者 & 核心组织者',
  },
  {
    avatar: `https://github.com/MYXXTS.png`,
    name: 'MYXXTS',
    github: 'MYXXTS',
    title: '珍藏于心底的时光，是记忆深处最美的花',
    desc: 'Mog RFC 主要参与者 & 项目设计者',

  },
  {
    avatar: `https://github.com/ttimochan.png`,
    name: 'ttimochan',
    github: 'ttimochan',
    title: "Let's start learning !",
    desc: 'Mog 文档团队 & PR 审核 & CI/CD',
  },
  {
    avatar: `https://github.com/origami-tech.png`,
    name: 'Origami',
    github: 'origami-tech',
    title: 'Salted fish',
    desc: 'Mog 核心协助开发者 & 项目重要赞助者'
  },
  {
    avatar: `https://github.com/reborn1028.png`,
    name: 'Guaguamiao',
    github: 'reborn1028',
    title: '(๑• . •๑)',
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

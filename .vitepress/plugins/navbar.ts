/*
 * @FilePath: /mog-docs/.vitepress/plugins/navbar.ts
 * @author: Wibus
 * @Date: 2022-10-05 21:24:06
 * @LastEditors: Wibus
 * @LastEditTime: 2022-10-05 21:27:26
 * Coding With IU
 */
import type { Plugin } from 'vite'

// Due to https://github.com/vuejs/theme/commit/842e4451fbf13925d1c67aa4274f86fc5a8510f7
export function NavbarFix(): Plugin {
  return {
    name: 'navbar-fix',
    enforce: 'pre',
    transform(code, id) {
      if (id.includes('VPNavBarTitle.vue') && !id.endsWith('.css')) {
        return `
<template>
  <a class="VPNavBarTitle" href="/">
<svg width="45px" height="45px" viewBox="0 0 668 668" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Space</title>
    <defs>
        <linearGradient x1="87.3138212%" y1="-3.64049557%" x2="26.0801443%" y2="88.3185541%" id="linearGradient-1">
            <stop stop-color="#FFFE04" offset="0%"></stop>
            <stop stop-color="#DFDFDF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="-5.62161065%" x2="26.4535028%" y2="94.0824558%" id="linearGradient-2">
            <stop stop-color="#F3F3F3" stop-opacity="0.5" offset="0%"></stop>
            <stop stop-color="#B5B5B5" stop-opacity="0.5" offset="100%"></stop>
        </linearGradient>
        <circle id="path-3" cx="335.129032" cy="334.376344" r="156.182796"></circle>
        <filter x="-14.4%" y="-10.6%" width="125.0%" height="125.0%" filterUnits="objectBoundingBox" id="filter-4">
            <feOffset dx="-6" dy="6" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="12" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.823529412   0 0 0 0 0.823529412   0 0 0 0 0.552941176  0 0 0 0.793760927 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
    </defs>
    <g id="Space" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect id="矩形" fill="#F5FAF1" x="124" y="124" width="420" height="420" rx="112"></rect>
        <g id="椭圆形">
            <use fill="black" fill-opacity="1" filter="url(#filter-4)" xlink:href="#path-3"></use>
            <use fill="url(#linearGradient-1)" fill-rule="evenodd" xlink:href="#path-3"></use>
            <use fill="url(#linearGradient-2)" fill-rule="evenodd" xlink:href="#path-3"></use>
        </g>
    </g>
</svg>
    <span class="text">Mog</span>
  </a>
</template>

<style scoped>
.VPNavBarTitle {
  display: flex;
  align-items: center;
  padding-top: 1px;
  height: var(--vt-nav-height);
  transition: opacity 0.25s;
}
.VPNavBarTitle:hover {
  opacity: 0.6;
}
.logo {
  position: relative;
}
.logo + .text {
  padding-left: 8px;
}
.text {
  font-size: 16px;
  font-weight: 500;
}
</style>
      `
      }
    },
  }
}
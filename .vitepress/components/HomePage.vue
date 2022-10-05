<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'
import { teamMembers } from '../contributors'

const features = [
  {
    "title": "弹性服务",
    "details": "你可以随意装载你需要的服务，而不需要担心其他的影响。这项技术得亏于 Mog 采用了微服务架构。"
  },
  {
    "title": "主题市场  (WIP)",
    "details": "主题多种开发方式，支持使用模板引擎耦合式开发或前后端分离开发，提供更多的主题选择。"
  },
  {
    "title": "插件系统  (WIP)",
    "details": "使用插件对博客功能自定义扩展，打造更加强大的博客空间。"
  },
  {
    "title": "评论系统",
    "details": "Mog 提供了几个简单的评论模块，为前端项目开发助力。"
  }
]



</script>

<template>

  <section id="hero">
    <h1 class="tagline">
      The
      <span class="accent">Flexible Module</span>
      <br />Blog System
    </h1>
    <p class="description">
      一款弹性的模块化 CMS 博客系统 | Module + Blog = /mɑːɡ/
    </p>
    <p class="actions">
      <vue-mastery-modal />
      <a class="get-started" href="/guide/">
        Get Started
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24">
          <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
        </svg>
      </a>
      <a class="setup" href="/guide/why.html" style="margin-right: 18px;">Why Mog?</a>
    </p>
  </section>

  <div class="VPFeatures VPHomeFeatures">
    <div class="container">
      <div class="items">
        <div class="grid-4 item" v-for="feature in features" :key="feature.title">
          <article class="VPFeature">
            <h2 class="title">{{ feature.title }}</h2>
            <p class="details">{{ feature.details }}</p>
          </article>
        </div>
      </div>
    </div>
  </div>

  <div class="content">
    <div class="content-container">
      <main class="main">
        <div class="vp-doc" flex flex-col items-center mt-10>
          <h2 id="meet-the-team" op50 font-normal p="t-10 b-2">
            认识一下团队
          </h2>
          <div w-full p-10>
            <VPTeamMembers size="small" :members="teamMembers" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>


<style scoped>
.VPFeature {
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 24px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
}

.title {
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
}

.details {
  padding-top: 8px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.item{
  padding: 8px;
  width: 100%;
}



@media (min-width: 640px) {

  .item.grid-2,
  .item.grid-4,
  .item.grid-6 {
    width: 50%;
  }
}

@media (min-width: 768px) {

.item.grid-2,
.item.grid-4 {
  width: 50%;
}
}


@media (min-width: 960px) {
  .item.grid-4 {
    width: 25%;
  }
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}

@media (min-width: 640px) {
  .VPFeatures {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .VPFeatures {
    padding: 0 64px;
  }
}



.VPFeatures {
  position: relative;
  padding: 0 24px;
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}


section {
  padding: 42px 32px;
}

#hero {
  padding: 96px 32px;
  text-align: center;
}

.tagline {
  font-size: 76px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0px auto;
}

html:not(.dark) .accent,
.dark .tagline {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  max-width: 960px;
  line-height: 1.5;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  font-size: 22px;
  margin: 24px auto 40px;
}

.actions a {
  font-size: 16px;
  display: inline-block;
  background-color: var(--vt-c-bg-mute);
  padding: 8px 18px;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
}

.actions .get-started {
  font-weight: 600;
  background-color: var(--vt-c-green);
  color: #fff;
  margin-right: 18px
}

.actions .icon {
  display: inline;
  position: relative;
  top: -1px;
  margin-left: 2px;
  fill: currentColor;
  transition: transform 0.2s;
}

.dark .actions .get-started {
  color: var(--vt-c-indigo);
}

.actions .get-started:hover {
  background-color: var(--vt-c-green-dark);
  transition-duration: 0.2s;
}

.actions .get-started:hover .icon {
  transform: translateX(2px);
}

.dark .actions .get-started:hover {
  background-color: var(--vt-c-green-light);
}

.actions .setup {
  color: var(--vt-c-text-code);
}

.actions .setup:hover {
  background-color: var(--vt-c-gray-light-4);
  transition-duration: 0.2s;
}

.dark .actions .setup:hover {
  background-color: var(--vt-c-gray-dark-3);
}

#special-sponsor {
  border-top: 1px solid var(--vt-c-divider-light);
  border-bottom: 1px solid var(--vt-c-divider-light);
  padding: 12px 24px;
  text-align: center;
}

#special-sponsor span {
  color: var(--vt-c-text-2);
  font-weight: 500;
  font-size: 13px;
  vertical-align: middle;
  margin: 0 24px;
}

#special-sponsor img {
  display: inline-block;
  vertical-align: middle;
  height: 36px;
}

.dark #special-sponsor img {
  filter: grayscale(1) invert(1);
}

#highlights {
  max-width: 960px;
  margin: 0px auto;
  color: var(--vt-c-text-2);
}

#highlights h2 {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.4px;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
  margin-bottom: 0.75em;
}

#highlights p {
  font-weight: 400;
  font-size: 15px;
}

#highlights .vt-box {
  background-color: transparent;
}

@media (max-width: 960px) {
  .tagline {
    font-size: 64px;
    letter-spacing: -0.5px;
  }

  .description {
    font-size: 18px;
    margin-bottom: 48px;
  }
}

@media (max-width: 768px) {
  .tagline {
    font-size: 48px;
    letter-spacing: -0.5px;
  }
}

@media (max-width: 576px) {
  #hero {
    padding: 64px 32px;
  }

  .description {
    font-size: 16px;
    margin: 18px 0 30px;
  }

  #special-sponsor img {
    display: block;
    margin: 2px auto 1px;
  }

  #highlights h3 {
    margin-bottom: 0.6em;
  }

  #highlights .vt-box {
    padding: 20px 36px;
  }
}

@media (max-width: 370px) {
  .tagline {
    font-size: 36px;
  }
}
</style>
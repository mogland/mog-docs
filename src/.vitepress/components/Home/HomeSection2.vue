<script setup lang="ts">
import { VPTeamMembers, VPTeamPageTitle } from 'vitepress/theme'
import { teamMembers } from '../../contributors'
</script>

<template>

  <section class="home_section">
    <div class="notice">
      <div class=""><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg></div>
      <p class="notice_text">
        Mog v2 目前还在开发中，我们还没有提供可用的使用文档。当我们有一个 Alpha 版本准备测试时，我们将在这里发布一个文档链接。在此之前，我们欢迎贡献者帮助实现这个项目。
      </p>
    </div>

    <div class="feature_item">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
      <p class="title">弹性服务</p>
      <p class="description">你可以随意装载你需要的服务，而不需要担心其他的影响。这项技术得亏于 Mog 采用了微服务架构。</p>
    </div>

    <div class="feature_item">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path
          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
        </path>
      </svg>
      <p class="title">自由软件</p>
      <p class="description">Mog 是一个自由软件项目，在遵守 AGPL 3.0 许可证的情况下，你可以随意地分发，使用，二次修改。</p>
    </div>

    <div class="feature_item">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
      <p class="title">可扩展 & 可自定义</p>
      <p class="description">Mog 的服务都是可插拔的，你可以随意添加或者删除服务，而不需要担心其他服务的影响。</p>
    </div>

    <div class="feature_item">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
      <p class="title">直观 & 可视化的配置</p>
      <p class="description">我们对用户界面的设计将会朝着易于使用和提高效率的方向发展。</p>
    </div>

  </section>

  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      Mog 的开发团队由来自全国各地的开发者组成，他们中的一些人选择在下面展示出来。
    </template>
  </VPTeamPageTitle>

  <VPTeamMembers size="small" :members="teamMembers" />  

</template>

<style scoped>
.home_section {
  --section-accent-color: var(--azure);
  padding-bottom: 160px;
  margin-left: auto;
  margin-right: auto;
  max-width: 980px;
  width: calc(100% - 48px);
  padding-top: 60px;
  padding-bottom: 0px;
  padding-left: calc(max(24px, env(safe-area-inset-left)));
  padding-right: calc(max(24px, env(safe-area-inset-right)));
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 96px;
}

.notice {
  --tile-background-color: var(--background-tertiary-color);
  --tile-overlay-background-color: var(--section-accent-color, #86868b);
  --tile-overlay-copy-max-width: 550px;
  position: relative;
  background-color: var(--background-tertiary-color);
  border-radius: 30px;
  overflow: hidden;
  padding: 40px;
  display: flex;
  flex-direction: row;
  gap: 28px;
  -webkit-box-align: stretch;
  align-items: stretch;
  -webkit-box-pack: start;
  justify-content: flex-start;
  grid-column: span 2 / auto;
  grid-row-end: auto;
}

.notice_text {
  font-size: 21px;
  line-height: 1.381;
  font-weight: 500;
  letter-spacing: 0.011em;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: var(--label-primary-color);
}

.feature_item {
  grid-row-end: auto;
  grid-column-end: auto;
  display: flex;
  flex-direction: column;
  -webkit-box-align: stretch;
  align-items: stretch;
  -webkit-box-pack: start;
  justify-content: flex-start;
}


.feature_item .title {
  font-size: 21px;
  line-height: 1.381;
  font-weight: 500;
  letter-spacing: 0.011em;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: var(--label-primary-color);
  margin-top: 1em;
}

.feature_item .description {
  font-size: 21px;
  line-height: 1.381;
  font-weight: 500;
  letter-spacing: 0.011em;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: var(--label-primary-color);
  opacity: 0.5;
  margin-top: 0.5em;
}
</style>
<script setup lang="ts">

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

  <div class="VPFeatures">
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

</template>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 1152px;
}

.VPFeature {
  /* border: 1px solid var(--background-tertiary-color); */
  border-radius: 12px;
  padding: 24px;
  height: 100%;
  /* background-color: var(--background-tertiary-color); */
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


.item {
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
</style>
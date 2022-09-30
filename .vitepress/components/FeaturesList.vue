<script setup>
import ListItem from './ListItem.vue'
</script>

<template>
  <ul
    class="features-list"
    dir="auto"
    flex="~ col gap2 md:gap-3"
  >
    <ListItem>服务端使用微服务架构，支持弹性部署、异步加载、并发处理、数据缓存。</ListItem>
    <ListItem>官方前端 <a target="_blank" href="https://zh.m.wikipedia.org/zh-hans/服务器端渲染" rel="noopener noreferrer" >SSR</a> 支持，为 SEO 和高性能提供支持</ListItem>
    <ListItem>主题多种开发方式，支持使用模板引擎耦合式开发或前后端分离开发，提供更多的主题选择。</ListItem>
    <ListItem>使用插件对博客功能自定义扩展，打造更加强大的博客空间。</ListItem>
    <ListItem>提供即时评论模块，更加快速构建前端项目</ListItem>
    <ListItem>社区规则的规范制定，确保开发的一致性和交流的统一性。</ListItem>
  </ul>
</template>

<style scoped>
.features-list li {
  list-style: none;
  display: flex;
  gap: 0.4rem;
  margin: 0;
}

.features-list {
  padding: 0;
}
</style>
---
title: 版本发布 | 关于
outline: deep
---

<script setup>
import { onMounted } from 'vue'

// let version = $ref()
let ver = ''

onMounted(async () => {
  const res = await fetch('https://api.github.com/repos/mogland/core/releases?per_page=1')
  ver = (await res.json())[0].name
  let version = document.getElementById('version') 
  version.innerHTML = ver
})
</script>

# 版本发布 {#releases}

当前 Mog 的最新稳定版本是 <strong id="version">加载中...</strong>

完整的过往发布记录可以在 [GitHub](https://github.com/mogland/core/releases) 查阅。


## 发布周期 {#release-cycle}

Mog 并没有固定的发布周期。

- 补丁版本 (patch releases) 发布会及时按需进行。

- 小版本 (minor releases) 发布总是会包含一些新特性，发布周期并不确定，并会经历 beta 预发布阶段。

- 大版本 (major releases) 发布会提前知会，且经历早期讨论和 alpha、beta 等预发布阶段。

## 语义化版本控制的特殊情况 {#semantic-versioning-edge-cases}

Mog 的发布会遵循[语义化版本控制](https://semver.org/)，同时伴随一些特殊情况。

### 编译后的代码和旧版运行时之间的兼容性 {#compile-code-compatibility-with-older-runtime}

较新**小版本**的 Mog 编译器可能会生成与较旧小版本的 Mog 运行时不兼容的代码。例如，由 Mog v2.1 生成的代码可能不完全兼容 Mog v.2.2 的运行时。

## 预发布版本 {#pre-releases}

小版本发布通常会经历不定量的 beta 版。而大版本发布则会经历 alpha 和 beta 阶段。

预发布版本 (pre releases) 是为了进行集成/稳定性测试，并让早期用户为不稳定的功能提供反馈。请不要在生产中使用预发布版本。所有的预发布版本都被认为是不稳定的，并且可能会在两者之间产生不兼容变更，所以在使用预发布版本时，一定要精确锁定版本号。

## 废弃的特性 {#deprecations}

我们可能会定期废弃那些在新的小版本中拥有更新更好的替代品的功能。被废弃的功能仍将继续工作，但会在进入废弃状态后的下一个大版本中被删除。

## RFC {#rfcs}

具有可观表层 API 的新特性和 Mog 的重大变更都将经历**意见征集** (RFC) 流程。RFC 流程的目的是为新功能进入该框架提供一个一致且可控的路径，并给用户一个机会参与设计过程并提供反馈。

该 RFC 流程会在 GitHub 上的 [mogland/rfcs](https://github.com/mogland/rfcs) 仓库进行。

## 试验性特性 {#experimental-features}

有些特性在 Mog 的稳定版本中已经发布并被记录了，但被标记为试验性的。试验性特性通常与某些 RFC 讨论相关联，这些讨论中的大部分设计问题已经在理论上得到了解决，但仍缺乏来自真实实践的反馈。

试验性特性的目的是允许用户通过在生产环境中测试它们来提供反馈，而不必使用不稳定的 Mog 版本。试验性特性本身是被认为不稳定的，只能以某种受控的方式使用，且该特性可预期地会在任何发布类型中发生变化。

---

此页面参考自 Vue.js 的 [版本发布](https://cn.vuejs.org/about/releases.html) 页面。
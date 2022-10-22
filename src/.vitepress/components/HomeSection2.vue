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


    

  </section>

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
  /* grid-template-columns: repeat(2, 1fr); */
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
}

.notice_text {
  font-size: 21px;
  line-height: 1.381;
  font-weight: 500;
  letter-spacing: 0.011em;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: var(--label-primary-color);
}
</style>
<template>

  <HomeHeader />

  <HeroBanner />

  <div class="hero">

    <div class="logo">
      <span
        style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%">
        <span
          style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%">
          <img
            style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0"
            alt="" aria-hidden="true"
            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27128%27%20height=%27128%27/%3e">
        </span>
        <img alt="Mog product icon" src="/logo.svg" decoding="async"
          style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"></span>
    </div>

    <h1 class="mog_name">Mog - /mɑːɡ/</h1>

    <h1 class="hero_desc">A
      <span class="heroTag">flexible, modular</span>
      Blog System.
      <br>
      Open source. Free forever.
    </h1>

    <p class="hero_description">
      Mog 是一个易于扩展的现代博客系统。它突破地采用了微服务架构，在结构设计是模块化、灵活的。
      <br>
      您可以轻松地将其自定义以满足您的需求。
      更可以通过接口来开发自己的前/中后台，也可以通过插件来开发自己的功能。
    </p>

    <ButtonStarted text="Release Coming Soon" />

    <p class="version_info">
      v2.0.0&nbsp;|&nbsp;Node.js 16+&nbsp;
    </p>

    

  </div>

  <HomeSection2 />

  <div class="place_holder"></div>

  <!-- <VPFeatures /> -->

</template>


<style scoped>

.place_holder {
  padding: 82px;
}

.hero {
  padding: 4rem 4rem 0;
  display: flex;
  text-align: center;
  flex: 0 1 auto;
  flex-flow: row wrap;
  -webkit-box-pack: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  gap: 16px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
}

.logo {
  width: 128px;
  margin-left: auto;
  margin-right: auto;
}

.mog_name {
  font-size: 28px;
  line-height: 1.14286;
  font-weight: 600;
  letter-spacing: 0.007em;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: var(--label-primary-color);
}

.hero_desc {
  font-size: 64px;
  line-height: 1.0625;
  font-weight: 600;
  letter-spacing: -0.009em;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: var(--label-primary-color);
}

.hero_description {
  font-size: 24px;
  line-height: 1.33341;
  font-weight: 500;
  letter-spacing: 0.009em;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin-bottom: 1em;
  color: var(--label-tertiary-color);
}

/* .heroTag {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
} */

.version_info {
  font-size: 14px;
  line-height: 1.42859;
  font-weight: 500;
  letter-spacing: -0.016em;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: var(--label-tertiary-color);
}
</style>

<style>
.VPNav
/* ,.VPFooter  */
{
  display: none;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  width: 100%;
}

.VPContent {
  padding: 0 !important;
}

.VPTeamMembers.small .container {
  grid-template-columns: repeat(2, 1fr) !important;
  max-width: 800px !important;
}

.VPTeamMembersItem.small .name {
  font-size: 20px !important;
  line-height: 1.0625;
  /* letter-spacing: -0.009em; */
  color: var(--label-primary-color);
}
.VPTeamMembersItem.small .title {
  font-size: 16px !important;
  line-height: 1.33341;
  color: var(--label-tertiary-color);
}
.VPTeamMembersItem.small .desc {
  font-size: 14px !important;
  line-height: 1.42859;
}
</style>
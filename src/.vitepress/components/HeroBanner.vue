<template>
  <div class="banner_container">
    <div class="banner">
      <p>
        Mog is currently in development. Check out the roadmap.
      </p>
    </div>
  </div>
</template>

<style scoped>
.banner_container {
  --ribbon-background-color: #FCDFB5;
  --ribbon-text-color: #000;
  --ribbon-link-color: #000;
  --ribbon-focus-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  cursor: pointer;
}

.banner {
  animation: 0.8s cubic-bezier(0.42, 0, 0.58, 1) 0s 1 normal forwards running vHhft;
  background-color: var(--ribbon-background-color);
  padding-top: 0.94118em;
  padding-bottom: 0.94118em;
  text-align: center;
}

.banner p {
  color: var(--ribbon-text-color);
  font-size: 14px;
  line-height: 1.42859;
  font-weight: 500;
  letter-spacing: -0.016em;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
</style>
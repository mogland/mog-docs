<template>
  <nav>
    <div class="header">
      <h1 class="name">
        <a href="/">Mog</a>
      </h1>
      <div class="links">
        <div class="links_list">
          <ul>
            <li class="item">
              <a href="https://github.com/mogland/core">GitHub</a>
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="sc-ezWOiH dRuuKk">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </li>
            <li class="item">
              <a href="/guide/" target="_blank">Getting Started</a>
            </li>
          </ul>
          <ButtonStarted text="Release Coming Soon" style="font-size: 10px;" />
        </div>
      </div>

    </div>
  </nav>
</template>

<style scoped>
nav {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 52px;
  z-index: 9997;
  position: sticky;
  transition: background-color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1) 0s;
  background-color: var(--material-background-color);
  backdrop-filter: var(--material-filters);
  box-shadow: 0 1px 0 0 var(--material-separator-color);
}

.header {
  z-index: 2;
  display: flex;
  height: 52px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: 980px;
  width: calc(100% - 48px);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: calc(max(24px, env(safe-area-inset-left)));
  padding-right: calc(max(24px, env(safe-area-inset-right)));
  position: relative;
}

.name {
  font-size: 21px;
  line-height: 1.14286;
  font-weight: 600;
  letter-spacing: 0.011em;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
  cursor: default;
  display: block;
  margin: 0px;
  padding: 0px;
  white-space: nowrap;
  transition: color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1) 0s;
  color: var(--glyph-gray);
}

.name a {
  display: inline-block;
  letter-spacing: inherit;
  line-height: inherit;
  margin: 0px;
  text-decoration: none;
  white-space: nowrap;
  color: var(--glyph-gray);
  opacity: 0.92;
}

.links_list .item a {
  color: var(--foreground-color);
  display: inline-block;
  line-height: 22px;
  white-space: nowrap;
  opacity: 0.88;
}

.links_list .item a:hover {
  color: var(--glyph-green);
}

.links {
  font-size: 12px;
  line-height: 1;
  font-weight: 400;
  letter-spacing: -0.01em;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 24px;
}

.links_list {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 24px;
}

.links_list .item {
  margin-left: 24px;
  float: left;
  list-style: none;
  display: flex;
  gap: 4px;
  -webkit-box-align: center;
  align-items: center;
}
</style>
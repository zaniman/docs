<script setup>
import DefaultTheme from 'vitepress/theme'

const VPNavBar = DefaultTheme.components.VPNavBar
</script>

<template>
  <div class="navbar-wrapper">
    <VPNavBar />
    <div class="navbar-banner">
      <div class="banner-text">📝 Documentation in Progress — This documentation may contain inaccuracies.</div>
    </div>
  </div>
</template>

<style scoped>
.navbar-wrapper {
  position: relative;
}

.navbar-banner {
  background: linear-gradient(135deg, #fff9e6 0%, #fff4cc 100%);
  border-bottom: 1px solid #ffd700;
  padding: 4px 0;
  text-align: center;
  font-size: 12px;
  color: #8b6914;
}

.banner-text {
  margin: 0;
}

@media (prefers-color-scheme: dark) {
  .navbar-banner {
    background: linear-gradient(135deg, #3d3400 0%, #4a3d00 100%);
    border-bottom-color: #8b7500;
    color: #e8d084;
  }
}
</style>

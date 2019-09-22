<template>
  <div class="layout">
    <Nav />
    <slot />
  </div>
</template>

<script>
import Nav from "~/components/Nav.vue";

export default {
  components: {
    Nav
  }
};
</script>

<style lang="scss">
html, body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;

  & a {
    text-decoration: none;
  }
}

.layout {
  display: flex;
  height: 100%;
  width: 100%;
}

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
    .layout {
      // display: block;
      // position: absolute;
      flex-direction: column-reverse;
    }
  }
</style>

<template>
  <nav class="nav">
    <NavItem route="/" iconPrefix="fas" icon="home" text="Home" />
    <NavItem route="/about" iconPrefix="fas" icon="id-card" text="About" />
    <NavItem route="/contact" iconPrefix="fas" icon="envelope" text="Contact" />
    <NavItem route="/portfolio" iconPrefix="fas" icon="laptop-code" text="Portfolio" />
    <NavItem
      route="https://github.com/hcbreedl"
      iconPrefix="fab"
      icon="github"
      text="Github"
      external="true"
    />
  </nav>
</template>

<script>
import NavItem from "~/components/NavItem.vue";

export default {
  components: {
    NavItem
  },
  name: "Nav"
};
</script>

<style lang="scss">
.nav {
  $red: rgba(242, 38, 19, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem 1rem;
  width: 2rem;
  background-color: black;

  @media (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 4rem;
    padding: 0;
  }
}
</style>

<template>
  <Layout>
    <div class="main__wrapper">
      <div class="main__text">
        <h1>I MAKE S*** THAT</h1>
        <Glitch text="WORKS" />
      </div>
    </div>
  </Layout>
</template>

<script>
import Glitch from "~/components/Glitch.vue";

export default {
  components: {
    Glitch
  },
  metaInfo: {
    title: "Home"
  }
};
</script>

<style lang="scss">
.main {
  &__wrapper {
    display: flex;
    height: 100%;
    margin: auto;
    width: 95%;
  }

  &__text {
    margin: auto;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & h1 {
      color: black;
      font-size: 5rem;

      font-weight: normal;

      @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
        font-size: 1rem;
      }
    }
  }
}
</style>

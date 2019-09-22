<template>
  <Layout>
    <div class="about__wrapper">
      <img src="../assets/black-white-profile-pic.jpg" />
      <div class="about__text-wrapper">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About us"
  }
};
</script>

<style lang="scss">
.about {
  &__wrapper {
    display: flex;
    justify-content: center;
    padding: 5rem 2rem;

    @media (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
      flex-direction: column;
      height: 100%;
      padding: 0 2rem;
    }

    & img {
      border: solid black 2px;
      border-radius: 3px;
      height: 700px;

      @media (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
        display: none;
      }
    }
  }

  &__text-wrapper {
    padding: 2rem 8rem;
    width: 40%;

    @media (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
      padding: 0;
      text-align: center;
      width: 100%;
    }
  }
}
</style>

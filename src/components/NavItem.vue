<template>
  <g-link v-if="!external" :to="route">
    <div class="nav-item">
      <font-awesome class="nav-item__icon" :icon="[iconPrefix, icon]" />
      <div class="nav-item__label">{{ text }}</div>
    </div>
  </g-link>
  <a v-else :href="route" target="_blank" rel="noopener noreferer">
    <div class="nav-item">
      <font-awesome class="nav-item__icon" :icon="[iconPrefix, icon]" />
      <div class="nav-item__label">{{ text }}</div>
    </div>
  </a>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    external: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      required: true
    },
    iconPrefix: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.nav-item {
  $red: rgba(242, 38, 19, 1);

  display: flex;
  margin-top: 4rem;
  text-align: center;

  & > {
    margin-top: 2rem;
  }

  &:hover {
    .nav-item__label {
      visibility: visible;
      opacity: 1;
    }
  }

  &__icon {
    color: $red;
    font-size: 1.55rem;
    display: flex;
  }

  &__label {
    visibility: hidden;
    opacity: 0;
    color: $red;
    font-size: 1.25rem;
    margin: auto;
    margin-left: 2rem;
    transition: visibility 0.5s ease-in-out, opacity 0.25s ease-in-out;
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
    margin-top: 0;
    padding: 1rem 1rem;

    &__label {
      display: none;
      margin-left: 0;
    }
  }
}
</style>

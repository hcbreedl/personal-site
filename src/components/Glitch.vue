<template>
  <h1 class="glitch">{{ text }}</h1>
</template>

<script>
export default {
  name: "Glitch",
  props: ["text"]
};
</script>

<style lang="scss">
h1 {
  color: black;
  font-size: 5rem;
  font-weight: normal;

  &.glitch {
    color: white;
    font-family: arial;

    position: relative;
    padding: 30px;

    @media (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
      padding: 0;
      margin-left: 0.5rem;
      border-bottom: 1px solid black;
    }

    &::before,
    &::after {
      padding: 30px;
      color: white;
      content: "WORKS";
      position: absolute;
      width: 100%;
      height: 100%;
      background: black;
      overflow: hidden;
      top: 0;

      @media (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
        color: black;
        background: transparent;
        padding: 0;
        content: "";
      }
    }

    &::before {
      left: 3px;
      text-shadow: -2px 0 red;
      animation-name: glitch-animation-1;
      animation-duration: 2s;
      animation-timing-function: linear;
      animation-delay: 0s;
      animation-iteration-count: infinite;
      animation-direction: reverse-alternate;

      @media (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
        visibility: hidden;
        background: transparent;
      }
    }

    &::after {
      left: -3px;
      text-shadow: -2px 0 blue;
      animation-name: glitch-animation-2;
      animation-duration: 2s;
      animation-timing-function: linear;
      animation-delay: 0s;
      animation-iteration-count: infinite;
      animation-direction: reverse-alternate;

      @media (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
       visibility: hidden;
        background: transparent;
      }
    }
  }
}

@keyframes glitch-animation-1 {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(150) + px, 350px, random(150) + px, 30px);
    }
  }
}

@keyframes glitch-animation-2 {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(150) + px, 350px, random(150) + px, 30px);
    }
  }
}
</style>

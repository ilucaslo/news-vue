<template functional>
    <div class="loader-wrapper">
      <div class="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>{{ props.text }}</p>
    </div>
  </template>

<script>
export default {
  name: 'SpinnerLoader',
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
    p {
        font-size: 1em;
        font-weight: 300;
        margin-top: 5px;
        letter-spacing: 1px;
        color: rgb(82, 82, 82);
    }

    .loader-wrapper {
        text-align: center;
    }

    .loader {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }
    .loader div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #1976d2;
        border-radius: 50%;
        animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #1976d2 transparent transparent transparent;
    }
    .loader div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .loader div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .loader div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes loader {
        0% {
        transform: rotate(0deg);
        }
        100% {
        transform: rotate(360deg);
        }
    }
</style>

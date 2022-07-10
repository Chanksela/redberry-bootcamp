<template>
  <div v-if="!close" class="popup">
    <div class="popup-inner">
      <slot />
      <button @click="action" class="popup-close">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopUp",
  data() {
    return { close: false };
  },
  methods: {
    action() {
      this.close = true;
      console.log(this.$store.state.errors.popupError === true);
    },
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 10%;
  right: 10%;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  align-content: center;
}
.popup-inner {
  background: #fff;
  padding: 32px;
}
</style>

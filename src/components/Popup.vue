<template>
  <div v-if="!close" class="popup">
    <div class="popup-inner">
      <p class="popup-header">
        <span class="icon">!</span> Invalid {{ inputField }}
      </p>
      <slot />
      <button @click="action" class="popup-close">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopUp",
  data() {
    return { close: false };
  },
  props: { inputField: String },
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
  position: relative;
  top: 10%;
  right: 10%;
  z-index: 99;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-around;
}
.popup-header {
  color: red;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.icon {
  display: inline-block;
  background-color: red;
  color: white;

  width: 20px;
  height: 20px;
  border-radius: 50px;
  text-align: center;
}
.popup-inner {
  position: relative;
  background: #fff;
  padding: 32px;
}
.popup-close {
  position: absolute;
  top: 10%;
  right: 1%;
  border: none;
  background-color: transparent;
}
</style>

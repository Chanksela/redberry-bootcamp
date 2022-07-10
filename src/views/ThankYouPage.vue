<template>
  <div class="left">
    <FormLeft :coverImg="'fourth.png'" />
  </div>
  <div class="right">
    <div class="content">
      <img src="@/assets/pictures/succsess.png" alt="success" />
      <p>Onboarding completed!</p>
    </div>
  </div>
</template>

<script>
import FormLeft from "../components/FormLeft.vue";
export default {
  name: "ThankYouPage",
  components: { FormLeft },
};
</script>
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content > p {
  margin-top: 30px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 150%;
}
</style>

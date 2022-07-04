<template>
  <FormLeft :coverImg="'fourth.png'" />
  <div class="right">
    <div class="content">
      <img src="@/assets/pictures/succsess.png" alt="success" />
      <h3>Onboarding completed!</h3>
    </div>
    <div class="page-navigation">
      <router-link class="btn nxt-btn" to="/">TEMPORARY HOMEPAGE</router-link>
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

<template>
  <FormLeft
    :coverImg="'second.png'"
    :quote="'WHEN YOU SEE A GOOD MOVE LOOK FOR A BETTER ONE'"
    :author="'EMANUEL LASKER'"
  />
  <div class="right">
    <div class="right-header">
      <h6>Changable Header text</h6>
    </div>
    <div class="animation">HERE GOES THE ANIMATION</div>

    <div class="form">
      <div class="form-header">
        <h3>Personal Information</h3>
        <p>This is basic informations field</p>
      </div>
      <div class="content">
        <label for="name">Name</label>
        <br />
        <input v-model="name" type="text" id="name" />
        <p>Name: {{ name }}</p>
        <br />
        <label for="email">Email</label>
        <br />
        <input v-model="email" type="email" id="email" />
        <p>Email: {{ email }}</p>
        <br />
        <label for="tel">Phone Number</label>
        <br />
        <input v-model="phone" type="tel" id="tel" />
        <p>Tel: {{ phone }}</p>
        <br />
        <label for="date">Date of birth</label>
        <br />
        <input v-model="date_of_birth" type="text" id="date" />
        <p>DOB: {{ date_of_birth }}</p>
      </div>
    </div>
    <div class="page-navigation">
      <router-link class="prv-btn" to="/">Back</router-link>
      <router-link class="nxt-btn" to="/experience">Next</router-link>
    </div>
  </div>
</template>
<script>
import FormLeft from "@/components/FormLeft.vue";
export default {
  name: "InfoPage",
  components: { FormLeft },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      date_of_birth: "",
    };
  },
  methods: {},
};
</script>
<style></style>

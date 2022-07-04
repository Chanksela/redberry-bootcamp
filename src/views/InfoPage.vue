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
        <input type="text" id="name" />
        <br />
        <label for="email">Email</label>
        <br />
        <input type="email" id="email" />
        <br />
        <label for="tel">Phone Number</label>
        <br />
        <input type="tel" id="tel" />
        <br />
        <label for="date">Date of birth</label>
        <br />
        <input type="date" id="date" />
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
export default { name: "InfoPage", components: { FormLeft } };
</script>
<style></style>

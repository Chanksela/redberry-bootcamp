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
        <div v-if="nameError !== ''" class="error">{{ nameError }}</div>
        <br />
        <label for="email">Email</label>
        <div v-if="emailError !== ''" class="error">{{ emailError }}</div>

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
      <!-- <router-link @click="testClick" to="/experience">Next</router-link> -->
      <button
        class="nxt-btn"
        @click="
          test();
          error && $router.push('/experience');
        "
      >
        Next
      </button>
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
      error: false,
      nxtPg: "experience",
      nameError: "",
      emailError: "",
    };
  },
  methods: {
    test() {
      if (!this.email.includes("@")) {
        this.emailError = "wrong email type";
      } else if (this.name.length <= 2) {
        this.nameError = "name must be longer than 2 character";
      } else {
        this.error = true;
        this.nameError = "";
      }
      console.log(this.error, this.nameError, this.emailError);
    },
    // ||
    // !this.email.includes("@") ||
    // this.phone.length !== 9 ||
    // this.date_of_birth == ""
    testClick() {
      console.log(
        "name: ",
        this.name,
        "email: ",
        this.email,
        "phone: ",
        this.phone,
        "dob: ",
        this.date_of_birth,
        "error: ",
        this.error
      );
    },
  },
};
</script>
<style></style>

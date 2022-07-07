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
        <!-- <div v-if="nameError !== ''" class="error">{{ nameError }}</div> -->
        <br />
        <label for="email">Email</label>
        <!-- <div v-if="emailError !== ''" class="error">{{ emailError }}</div> -->

        <br />
        <input v-model="email" type="email" id="email" />
        <p>Email: {{ email }}</p>
        <br />
        <label for="tel">Phone Number</label>
        <br />
        <input
          v-model="phone"
          type="tel"
          id="tel"
          pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
        />
        <p>Tel: {{ phone }}</p>
        <br />
        <label for="date">Date of birth</label>
        <br />
        <input v-model="date_of_birth" type="text" id="date" />
        <p>DOB: {{ date_of_birth }}</p>
      </div>
    </div>
    <div class="page-navigation">
      <button class="prv-btn" @click="$router.push('/')">Back</button>
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
      errorMessage: "",
    };
  },
  methods: {
    test() {
      if (
        this.name.length <= 2 ||
        !this.email.includes("@redberry.ge") ||
        this.phone.length !== 9 ||
        this.date_of_birth === ""
      ) {
        this.errorMessage = "Please make sure you wrote all fields correctly";
        alert(this.errorMessage);
      } else {
        this.error = true;
      }
      console.log(
        "name: ",
        this.name,
        "email: ",
        this.email,
        "phone & phone length: ",
        this.phone,
        this.phone.length,
        "DOB: ",
        this.date_of_birth
      );
    },

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

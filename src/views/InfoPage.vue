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
        <div>
          <input
            placeholder="Name"
            type="text"
            id="name"
            v-model="name"
            @change="handleError"
          /><sup class="required">*</sup>
        </div>
        <div>
          <input
            placeholder="Email address"
            v-model="email"
            type="email"
            id="email"
          /><sup class="required">*</sup>
        </div>
        <div>
          <input
            placeholder="Phone number"
            v-model="phone"
            type="tel"
            id="tel"
            pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
          /><sup class="required">*</sup>
        </div>
        <div>
          <input
            placeholder="Date of birth"
            v-model="date_of_birth"
            type="date"
            id="date"
            pattern="\d{4}/\d{2}/\d{2}\"
          />
          <sup class="required">*</sup>
        </div>
      </div>
    </div>
    <div class="page-navigation">
      <button class="prv-btn" @click="$router.push('/')">Back</button>
      <button
        class="nxt-btn"
        @click="
          checkError();
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
      hasError: false,
      error: false,
      inputError: false,
      errorMessage: "",
    };
  },
  methods: {
    checkError() {
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
      this.testClick();
    },

    nameInputError(e) {
      if (e.target.id === "name" && e.target.value.length <= 2) {
        this.hasError = true;
        console.log(
          "name must contain more than 2 characters ",
          e.target.value.length,
          this.hasError
        );
      } else {
        this.hasError = !this.hasError;
        console.log(this.hasError);
      }
    },
    testClick() {
      console.log(
        "name: ",
        this.name,
        "email: ",
        this.email,
        "phone & phone length: ",
        this.phone,
        this.phone.length,
        "DOB: ",
        this.date_of_birth.replace(/-/g, "/")
      );
    },
  },
};
</script>
<style scoped>
.content {
  display: flex;
  flex-direction: column;
}
input {
  width: 30%;
}
</style>

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
            :class="{
              incorrectName: errors.nameHasError,
              correctName: !errors.nameHasError,
            }"
            v-model="state.name"
            @change="nameInputError"
          /><sup class="required">*</sup>
          <div v-if="errors.messages.nameErrorMessage">
            {{ errors.messages.nameErrorMessage }}
          </div>
        </div>
        <div>
          <input
            placeholder="Email address"
            v-model="state.email"
            type="email"
            id="email"
            :class="{
              incorrectEmail: errors.emailHasError,
              correctEmail: errors.emailHasError,
            }"
            @change="emailInputError"
          /><sup class="required">*</sup>
        </div>
        <div>
          <input
            placeholder="Phone number"
            v-model="state.phone"
            type="tel"
            id="tel"
            :class="{
              incorrectPhone: errors.phoneHasError,
              correctPhone: errors.phoneHasError,
            }"
            @change="phoneInputError"
          /><sup class="required">*</sup>
        </div>
        <div>
          <input
            placeholder="Date of birth"
            v-model="state.date_of_birth"
            type="date"
            id="date"
            :class="{
              incorrectDOB: errors.dobHasError,
              correctDOB: errors.dobHasError,
            }"
            @change="dobInputError"
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
          errors.error && $router.push('/experience');
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
      state: {
        name: "",
        email: "",
        phone: "",
        date_of_birth: "",
      },
      errors: {
        error: false,
        nameHasError: false,
        emailHasError: false,
        phoneHasError: false,
        dobHasError: false,
        inputError: false,
        messages: {
          errorMessage: "",
          nameErrorMessage: "",
          emailErrorMesssage: "",
          phoneErrorMessage: "",
          dobErrorMessage: "",
        },
      },
    };
  },
  methods: {
    // checking all erros when clickin next page
    checkError() {
      if (
        this.state.name.length <= 2 ||
        !this.state.email.includes("@redberry.ge") ||
        this.state.phone.length !== 9 ||
        this.state.date_of_birth === ""
      ) {
        this.errors.messages.errorMessage = "Please met every input requirment";
        alert(this.errors.messages.errorMessage);
      } else {
        this.errors.error = true;
      }
      this.testClick();
    },
    // individual input error methods
    // for name
    nameInputError(e) {
      if (e.target.value.length <= 2) {
        this.errors.nameHasError = true;
        this.errors.messages.nameErrorMessage =
          "Name must be longer than 2 characters";
        console.log(e.target.value.length, this.errors.nameHasError);
      } else {
        this.errors.nameHasError = false;
        console.log(this.errors.nameHasError);
      }
    },
    // for email
    emailInputError(e) {
      if (!e.target.value.includes("@redberry.ge")) {
        this.errors.emailHasError = true;
        console.log(
          "name must contain more than 2 characters ",
          e.target.value.includes("@redberry.ge"),
          this.errors.emailHasError
        );
      } else {
        this.errors.emailHasError = false;
        console.log(this.errors.emailHasError);
      }
    },
    // for phone
    phoneInputError(e) {
      if (e.target.value.length !== 9 || !/^\d+$/.test(e.target.value)) {
        this.errors.phoneHasError = true;
        console.log(
          "name must contain more than 2 characters ",
          e.target.value.length,
          this.errors.phoneHasError
        );
      } else {
        this.errors.phoneHasError = false;
        console.log(this.errors.phoneHasError);
      }
    },
    dobInputError(e) {
      if (e.target.value === "") {
        this.errors.dobHasError = true;
        console.log(e.target.value, this.errors.dobHasError);
      } else {
        this.errors.dobHasError = false;
        console.log(this.errors.dobHasError);
      }
    },
    // ---------------------
    testClick() {
      console.log(
        "name: ",
        this.state.name,
        "email: ",
        this.state.email,
        "phone & phone length: ",
        this.state.phone,
        this.state.phone.length,
        "DOB: ",
        this.state.date_of_birth.replace(/-/g, "/")
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

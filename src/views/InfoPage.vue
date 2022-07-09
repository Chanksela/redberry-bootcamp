<template>
  <FormLeft
    :coverImg="'second.png'"
    :quote="'WHEN YOU SEE A GOOD MOVE LOOK FOR A BETTER ONE'"
    :author="'EMANUEL LASKER'"
  />
  <Popup v-if="errors.popupError" :action="action">{{
    errors.messages.nameErrorMessage
  }}</Popup>

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
        <!-- name field -->
        <div>
          <input
            placeholder="Name"
            type="text"
            id="name"
            :class="{
              incorrectName: $store.state.errors.nameHasError,
              correctName: !$store.state.errors.nameHasError,
            }"
            v-model="$store.state.name"
            @change="$store.commit('nameInputError')"
          /><sup class="required">*</sup>
          <div
            v-if="$store.state.errors.messages.nameErrorMessage"
            class="errorMsg"
          >
            {{ $store.state.errors.messages.nameErrorMessage }}
          </div>
        </div>
        <!-- email field -->
        <div>
          <input
            placeholder="Email address"
            v-model="$store.state.email"
            type="email"
            id="email"
            :class="{
              incorrectEmail: $store.state.errors.emailHasError,
              correctEmail: $store.state.errors.emailHasError,
            }"
            @change="$store.commit('emailInputError')"
          /><sup class="required">*</sup>
          <div
            v-if="$store.state.errors.messages.emailErrorMesssage"
            class="errorMsg"
          >
            {{ $store.state.errors.messages.emailErrorMesssage }}
          </div>
        </div>
        <!-- phone field -->
        <div>
          <input
            placeholder="Phone number"
            v-model="$store.state.phone"
            type="tel"
            id="tel"
            :class="{
              incorrectPhone: $store.state.errors.phoneHasError,
              correctPhone: $store.state.errors.phoneHasError,
            }"
            @change="$store.commit('phoneInputError')"
          /><sup class="required">*</sup>
          <div
            v-if="$store.state.errors.messages.phoneErrorMessage"
            class="errorMsg"
          >
            {{ $store.state.errors.messages.phoneErrorMessage }}
          </div>
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
          <div v-if="errors.messages.dobErrorMessage" class="errorMsg">
            {{ errors.messages.dobErrorMessage }}
          </div>
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
import Popup from "../components/Popup.vue";
export default {
  name: "InfoPage",
  components: { FormLeft, Popup },
  data() {
    return {
      state: {
        email: "",
        phone: "",
        date_of_birth: "",
      },
      errors: {
        error: Boolean,
        popupError: false,
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
    action() {
      this.errors.popupError = !this.errors.popupError;
    },
    // checking all erros when clickin next page
    checkError() {
      if (
        this.state.name.length <= 2 ||
        !this.state.email.includes("@redberry.ge") ||
        this.state.phone.length !== 9 ||
        this.state.date_of_birth === ""
      ) {
        this.errors.error = false;
        this.errors.messages.errorMessage =
          "Please fill every input and follow their requirments";
        alert(this.errors.messages.errorMessage);
      } else {
        this.errors.error = true;
      }
      this.testClick();
    },
    // for DOB
    dobInputError(e) {
      if (e.target.value === "") {
        this.errors.dobHasError = true;
        this.errors.messages.dobErrorMessage =
          "Plese indicate full date of birth";
        console.log(e.target.pattern);
      } else {
        this.errors.dobHasError = false;
        this.errors.messages.dobErrorMessage = "";
      }
    },
    // ---------------------
    testClick() {
      console.log(
        "name: ",
        this.$store.state.name,
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

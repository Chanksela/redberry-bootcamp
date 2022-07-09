import { createStore } from "vuex";
export default createStore({
  state: {
    characters: [],
    name: "",
    email: "",
    date_of_birth: "",
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
    mutations: {
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
      // individual input error methods
      // for name
      nameInputError(e) {
        if (e.target.value.length <= 2 || e.target.value === "") {
          this.errors.popupError = true;
          this.errors.nameHasError = true;
          this.errors.messages.nameErrorMessage =
            "Name must be longer than 2 characters";
        } else {
          this.errors.popupError = false;
          this.errors.nameHasError = false;
          this.errors.messages.nameErrorMessage = "";
        }
      },
      // for email
      emailInputError(e) {
        if (!e.target.value.includes("@redberry.ge")) {
          this.errors.emailHasError = true;
          this.errors.messages.emailErrorMesssage =
            "Email must end with @redberry.ge";
        } else {
          this.errors.emailHasError = false;
          this.errors.messages.emailErrorMesssage = "";
        }
      },
      // for phone
      phoneInputError(e) {
        if (e.target.value.length !== 9 || !/^\d+$/.test(e.target.value)) {
          this.errors.phoneHasError = true;
          this.errors.messages.phoneErrorMessage =
            "Phone number must only have 9 numbers (numbers only)";
        } else {
          this.errors.phoneHasError = false;
          this.errors.messages.phoneErrorMessage = "";
        }
      },
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
    actions: {},
    getters: {},
    modules: {},
  },
});

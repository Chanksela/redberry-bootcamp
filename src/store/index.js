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
  },
  mutations: {
    // individual input error methods
    // for name
    nameInputError(state) {
      console.log(state.name.length);
      if (state.name.length <= 2 || state.name.length === "") {
        state.errors.popupError = true;
        state.errors.nameHasError = true;
        state.errors.messages.nameErrorMessage =
          "Name must be longer than 2 characters";
      } else {
        state.errors.popupError = false;
        state.errors.nameHasError = false;
        state.errors.messages.nameErrorMessage = "";
      }
    },
    // for email
    emailInputError(state) {
      if (!state.email.includes("@redberry.ge")) {
        state.errors.emailHasError = true;
        state.errors.messages.emailErrorMesssage =
          "Email must end with @redberry.ge";
      } else {
        state.errors.emailHasError = false;
        state.errors.messages.emailErrorMesssage = "";
      }
    },
  },
  actions: {},
  getters: {},
  modules: {},
});

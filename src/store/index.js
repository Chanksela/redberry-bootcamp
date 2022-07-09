import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    characters: [],
    name: "",
    phone: "",
    email: "",
    date_of_birth: "",
    experience_level: "",
    already_participated: "",
    character_id: "",
    errors: {
      error: Boolean,
      popupError: false,
      nameHasError: false,
      emailHasError: false,
      phoneHasError: false,
      dobHasError: false,
      inputError: false,
      dropped: false,
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

    // for phone
    phoneInputError(state) {
      if (state.phone.length !== 9 || !/^\d+$/.test(state.phone)) {
        state.errors.phoneHasError = true;
        state.errors.messages.phoneErrorMessage =
          "Phone number must only have 9 numbers (numbers only)";
      } else {
        state.errors.phoneHasError = false;
        state.errors.messages.phoneErrorMessage = "";
      }
    },
    // for DOB
    dobInputError(state) {
      if (state.date_of_birth === "") {
        state.errors.dobHasError = true;
        state.errors.messages.dobErrorMessage =
          "Plese indicate full date of birth";
      } else {
        state.errors.dobHasError = false;
        state.errors.messages.dobErrorMessage = "";
      }
    },
    // checking all erros when clickin next page
    checkError(state) {
      if (
        state.name.length <= 2 ||
        !state.email.includes("@redberry.ge") ||
        state.phone.length !== 9 ||
        state.date_of_birth === ""
      ) {
        state.errors.error = false;
        state.errors.messages.errorMessage =
          "Please fill every input and follow their requirments";
        alert(state.errors.messages.errorMessage);
      } else {
        state.errors.error = true;
      }
      state.date_of_birth = state.date_of_birth.replace(/-/g, "/");

      console.log(
        "name: ",
        state.name,
        "email: ",
        state.email,
        "phone & phone length: ",
        state.phone,
        "DOB: ",
        state.date_of_birth,
        "experience: ",
        state.experience_level,
        "previous participation: ",
        state.already_participated,
        "charachter_id: ",
        state.character_id
      );
    },
    // ---------------------

    // ----------------------
    action(state) {
      state.errors.popupError = !state.errors.popupError;
    },
    // fetch api ata
    setCharacters(state, characters) {
      state.characters = characters;
    },
    // finish form
    finish(state) {
      state.date_of_birth = state.date_of_birth.replace(/-/g, "/");
      console.log(
        "name: ",
        state.name,
        "email: ",
        state.email,
        "phone & phone length: ",
        state.phone,
        "DOB: ",
        state.date_of_birth,
        "experience: ",
        state.experience_level,
        "previous participation: ",
        state.already_participated,
        "charachter_id: ",
        state.character_id
      );
    },
    // custom dropdown
    dropDown(state) {
      state.errors.dropped = !state.errors.dropped;
    },

    characterSelect(state) {
      state.errors.dropped = !state.errors.dropped;
      console.log(state.character_id);
    },
  },
  actions: {
    fetchCharacters({ commit }) {
      axios("https://chess-tournament-api.devtest.ge/api/grandmasters").then(
        (res) => commit("setCharacters", res.data)
      );
    },
  },
  getters: {},
  modules: {},
});

import axios from "axios";
import { createStore } from "vuex";
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
      infoError: false,
      expError: false,
      finish: false,
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
        state.errors.infoError = false;
        state.errors.messages.errorMessage =
          "Please fill every input and follow their requirments";
        alert(state.errors.messages.errorMessage);
      } else {
        state.errors.infoError = true;
      }

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

    // finish form
    finish(state) {
      state.date_of_birth = state.date_of_birth.replace(/-/g, "/");
      if (
        state.experience_level === "" ||
        state.already_participated === "" ||
        state.character_id === ""
      ) {
        state.errors.expError = false;
        alert("error");
      } else {
        state.errors.expError = true;
      }
      if (state.errors.infoError && state.errors.expError) {
        state.errors.finish = true;
      } else {
        state.errors.finish = false;
      }
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
        "character_id: ",
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
    setCharacters(state, characters) {
      state.characters = characters;
    },
  },
  actions: {
    getCharacters({ commit }) {
      axios("https://chess-tournament-api.devtest.ge/api/grandmasters")
        .then((res) => {
          commit("setCharacters", res.data);
        })
        .catch((err) => console.log(err));
    },
  },
  getters: {},
  modules: {},
});

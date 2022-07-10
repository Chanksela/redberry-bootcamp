import axios from "axios";
import { createStore } from "vuex";
export default createStore({
  state: {
    characters: [],
    name: localStorage.getItem("name"),
    phone: localStorage.getItem("phone"),
    email: localStorage.getItem("email"),
    date_of_birth: localStorage.getItem("dob"),
    experience_level: localStorage.getItem("exp"),
    already_participated: localStorage.getItem("participation"),
    character_id: localStorage.getItem("character"),
    errors: {
      infoError: false,
      expError: false,
      finish: false,
      popupError: false,
      nameHasError: false,
      emailHasError: false,
      phoneHasError: false,
      dobHasError: false,
      expHasError: false,
      characterHasError: false,
      participationHasError: false,
      // inputError: false,
      dropped: false,
      messages: {
        errorMessage: "",
        nameErrorMessage: "",
        emailErrorMesssage: "",
        phoneErrorMessage: "",
        dobErrorMessage: "",
        expErrorMessage: "",
        characterErrorMessage: "",
        participationErrorMessage: "",
      },
    },
  },
  mutations: {
    // individual input error methods
    // for name
    nameInputError(state) {
      if (state.name.length <= 2 || state.name == null) {
        localStorage.setItem("name", state.name);
        state.errors.popupError = true;
        state.errors.nameHasError = true;
        state.errors.messages.nameErrorMessage =
          "Name must be longer than 2 characters";
      } else {
        localStorage.setItem("name", state.name);
        state.errors.popupError = false;
        state.errors.nameHasError = false;
        state.errors.messages.nameErrorMessage = "";
      }
      console.log(state.name);
    },
    // for email
    emailInputError(state) {
      if (!state.email.includes("@redberry.ge")) {
        localStorage.setItem("email", state.email);
        state.errors.popupError = true;
        state.errors.emailHasError = true;
        state.errors.messages.emailErrorMesssage =
          "Email must end with @redberry.ge";
      } else {
        localStorage.setItem("email", state.email);
        state.errors.popupError = false;
        state.errors.emailHasError = false;
        state.errors.messages.emailErrorMesssage = "";
      }
    },

    // for phone
    phoneInputError(state) {
      if (state.phone.length !== 9 || !/^\d+$/.test(state.phone)) {
        localStorage.setItem("phone", state.phone);
        state.errors.phoneHasError = true;
        state.errors.popupError = true;
        state.errors.messages.phoneErrorMessage =
          "Phone number must only have 9 numbers (numbers only)";
      } else {
        localStorage.setItem("phone", state.phone);
        state.errors.popupError = false;
        state.errors.phoneHasError = false;
        state.errors.messages.phoneErrorMessage = "";
      }
    },
    // for DOB
    dobInputError(state) {
      if (state.date_of_birth === "") {
        localStorage.setItem("dob", state.date_of_birth);
        state.errors.dobHasError = true;
        state.errors.popupError = true;
        state.errors.messages.dobErrorMessage =
          "Plese indicate full date of birth";
      } else {
        localStorage.setItem("dob", state.date_of_birth);
        state.errors.dobHasError = false;
        state.errors.popupError = false;
        state.errors.messages.dobErrorMessage = "";
        console.log(state.date_of_birth);
      }
    },
    // for experience level
    expInputError(state) {
      if (state.experience_level === "") {
        localStorage.setItem("exp", state.experience_level);
        state.errors.expHasError = true;
        state.errors.popupError = true;
        state.errors.messages.expErrorMessage = "please select your level";
      } else {
        localStorage.setItem("exp", state.experience_level);
        state.errors.expHasError = false;
        state.errors.popupError = false;
        state.errors.messages.expErrorMessage = "";
      }
    },
    characterInputError(state) {
      if (state.character_id === "" || state.character_id == null) {
        state.errors.characterHasError = true;
        state.errors.popupError = true;
        state.errors.messages.characterErrorMessage =
          "please choos your character";
      } else {
        state.errors.characterHasError = false;
        state.errors.popupError = false;
        state.errors.messages.characterErrorMessage = "";
      }
    },
    participationInputError(state) {
      if (
        state.already_participated === "" ||
        state.already_participated == null
      ) {
        localStorage.setItem("participation", state.already_participated);
        state.errors.participationHasError = true;
        state.errors.popupError = true;
        state.errors.messages.participationErrorMessage =
          "please choos your character";
      } else {
        localStorage.setItem("participation", state.already_participated);
        state.errors.participationHasError = false;
        state.errors.popupError = false;
        state.errors.messages.participationErrorMessage = "";
      }
    },
    // checking all erros when clickin next page
    checkError(state) {
      if (
        state.name == null ||
        state.name.length <= 2 ||
        state.email == null ||
        !state.email.includes("@redberry.ge") ||
        state.phone == null ||
        state.phone.length !== 9 ||
        state.date_of_birth == null ||
        state.date_of_birth === ""
      ) {
        state.errors.infoError = false;
        state.errors.messages.errorMessage =
          "Please fill out all field correctly";
        alert(!state.errors.infoError && state.errors.messages.errorMessage);
      } else {
        state.errors.infoError = true;
        console.log(typeof state.name);
      }
    },

    // ----------------------
    action(state) {
      state.errors.popupError = !state.errors.popupError;
    },

    // finish form
    finish(state) {
      if (
        state.experience_level === null ||
        state.already_participated === null ||
        state.character_id === null ||
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
        axios
          .post("https://chess-tournament-api.devtest.ge/api/register", {
            name: state.name,
            email: state.email,
            phone: state.phone,
            date_of_birth: state.date_of_birth,
            experience_level: state.experience_level,
            already_participated: state.already_participated,
            character_id: state.character_id,
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          }),
          localStorage.removeItem("name"),
          localStorage.removeItem("phone"),
          localStorage.removeItem("email"),
          localStorage.removeItem("dob"),
          localStorage.removeItem("exp"),
          localStorage.removeItem("character"),
          localStorage.removeItem("participation"),
          (state.name = ""),
          (state.phone = ""),
          (state.email = ""),
          (state.date_of_birth = ""),
          (state.experience_level = ""),
          (state.already_participated = ""),
          (state.character_id = "");
      } else {
        state.errors.finish = false;
        console.log("not error");
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
      console.log(
        "name: ",
        typeof state.name,
        "email: ",
        typeof state.email,
        "phone & phone length: ",
        typeof state.phone,
        "DOB: ",
        typeof state.date_of_birth,
        "experience: ",
        typeof state.experience_level,
        "previous participation: ",
        typeof state.already_participated,
        "character_id: ",
        typeof state.character_id
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

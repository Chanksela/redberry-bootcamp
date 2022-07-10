<template>
  <div class="dropdown">
    <p @click="$store.commit('dropDown')" class="text">
      {{
        $store.state.character_id == 1
          ? "Nona Gaphrindashvili"
          : $store.state.character_id == 2
          ? "Mikhail Tal"
          : $store.state.character_id == 3
          ? "Bobby Fisher"
          : $store.state.character_id == 4
          ? "Magnus Carlsen"
          : "Choose your character"
      }}
      <sup class="required">*</sup>
    </p>
    <div
      :class="{
        show: $store.state.errors.dropped,
        hide: !$store.state.errors.dropped,
      }"
    >
      <div
        v-for="character in characters"
        :key="character.id"
        :id="character.id"
        @click="test"
        class="dropdown-option"
      >
        <p @click="$store.commit('characterInputError')">
          {{ character.name }}
        </p>
        <img
          :src="'https://chess-tournament-api.devtest.ge' + character.image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CustomDropdown",

  data() {
    return {
      characters: null,
    };
  },

  methods: {
    test(e) {
      this.id = e.target.id;
      localStorage.setItem("character", e.target.id);
      this.$store.state.character_id = localStorage.getItem("character");
      this.$store.state.errors.dropped = !this.$store.state.errors.dropped;
      console.log(this.$store.state.character_id);
    },
  },
  mounted() {
    console.log(this.$store.state.experience_level);
    axios
      .get("https://chess-tournament-api.devtest.ge/api/grandmasters")
      .then(
        (res) => ((this.characters = res.data), console.log(this.characters))
      )
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
img {
  height: 30px;
  width: 30px;
}
.dropdown {
  border: red solid 3px;
  cursor: pointer;
  max-width: 30%;
}
.text {
  padding: 0.15rem;
  border: black 1px solid;
  width: 80%;
}
.show {
  display: block;
}
.hide {
  display: none;
  border: blue solid 2px;
  top: 0;
  max-width: 100%;
}

.dropdown-option {
  /* background-color: red; */
  border: green solid 1px;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.dropdown-option > p,
img {
  pointer-events: none;
}
/* .button {
  padding: 20px;
  background-color: black;
} */
</style>

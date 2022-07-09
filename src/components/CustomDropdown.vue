<template>
  <div class="dropdown">
    <p>Choose your character</p>
    <div class="dropdown-select">
      <div
        class="dropdown-option"
        v-for="character in characters"
        v-bind:key="character.id"
      >
        <p>{{ character.name }}</p>
        <img
          :src="'https://chess-tournament-api.devtest.ge' + character.image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomDropdown",
  data() {
    return {
      characters: [],
    };
  },
  mounted() {
    fetch("https://chess-tournament-api.devtest.ge/api/grandmasters")
      .then((res) => res.json())
      .then((data) => ((this.characters = data), console.log(data)))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
img {
  height: 50px;
  width: auto;
}
.dropdown-option {
  border: red solid 1px;
  display: flex;
  flex-direction: row;

  align-items: center;
}
</style>

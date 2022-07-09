<template>
  <div class="dropdown">
    <p @click="$store.commit('dropDown')" class="text">Choose your character</p>
    <div
      :class="{
        show: $store.state.errors.dropped,
        hide: !$store.state.errors.dropped,
      }"
    >
      <div
        class="dropdown-option"
        v-for="character in characters"
        :key="character.id"
        :id="character.id"
        @click="$store.commit('characterSelect')"
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
  height: 30px;
  width: 30px;
}
.dropdown {
  border: red solid 3px;
  cursor: pointer;
  max-width: 30%;
}
.text {
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
  background-color: red;
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
</style>

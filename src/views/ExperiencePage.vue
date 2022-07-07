<template>
  <FormLeft
    :coverImg="'third.png'"
    :quote="'MANY HAVE BECOME CHESS MASTERS; NO ONE HAS BECOME THE MASTER OF CHESS'"
    :author="'SIEGBERT TARRASCH'"
  />
  <div class="right">
    <div class="right-header">
      <h6>Changable Header text</h6>
    </div>
    <div class="animation">HERE GOES THE ANIMATION</div>
    <div class="form">
      <div class="form-header">
        <h3>Chess experience</h3>
        <p>This is basic informations field</p>
      </div>
      <div class="content">
        <div class="knowledge">
          <label for="level"
            >Level of knowledge<sup class="required">*</sup></label
          ><br />
          <select
            v-model="experience_level"
            name="level"
            id="level"
            form="knowledgelvl"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="professional">Professional</option>
          </select>
          <p>Level: {{ experience_level }}</p>
        </div>
        <div class="character">
          <label for="character"
            >Choose your character:<sup class="required">*</sup></label
          ><br />
          <select
            v-model="character_id"
            name="character"
            id="character"
            form="character"
          >
            <option
              v-for="character in characters"
              v-bind:key="character.id"
              v-bind:value="character.id"
            >
              {{ character.name }}
            </option>
          </select>
          <p>{{ character_id }}</p>
        </div>
        <div class="prev-participation">
          <p>
            Have you participated In the Redberry Championship?<sup
              class="required"
              >*</sup
            >
          </p>
          <input
            v-model="already_participated"
            type="radio"
            id="yes"
            name="participated"
            v-bind:value="true"
          />
          <label for="yes">Yes</label><br />
          <input
            v-model="already_participated"
            type="radio"
            id="no"
            name="participated"
            v-bind:value="false"
          />
          <label for="no">No</label><br />
          <p>{{ already_participated }}</p>
        </div>
      </div>
    </div>
    <div class="page-navigation">
      <router-link class="prv-btn" to="/info">Back</router-link>
      <button class="nxt-btn" @click="finish">Done</button>
    </div>
  </div>
</template>
<script>
import FormLeft from "@/components/FormLeft.vue";
export default {
  name: "ExperiencePage",
  components: { FormLeft },
  data() {
    return {
      characters: [],
      experience_level: "",
      already_participated: "",
      character_id: "",
    };
  },
  methods: {
    finish() {
      console.log(
        "experience: ",
        this.experience_level,
        "previous participation: ",
        this.already_participated,
        "charachter_id: ",
        this.character_id
      );
    },
  },
  mounted() {
    fetch("https://chess-tournament-api.devtest.ge/api/grandmasters")
      .then((res) => res.json())
      .then((data) => (this.characters = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
<style></style>

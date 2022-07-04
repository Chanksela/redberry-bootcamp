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
          <label for="level">Level of knowledge</label><br />
          <select name="level" id="level" form="knowledgelvl">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="professional">Professional</option>
          </select>
        </div>
        <div class="character">
          <label for="character">Choose your character:</label><br />
          <select name="character" id="character" form="character">
            <option
              v-for="character in characters"
              v-bind:key="character.id"
              value="{{charachter.name}}"
            >
              {{ character.name }}
            </option>
          </select>
        </div>
        <div class="prev-participation">
          <p>Have you participated In the Redberry Championship?</p>
          <input type="radio" id="yes" name="yes" value="yes" />
          <label for="yes">Yes</label><br />
          <input type="radio" id="no" name="no" value="no" />
          <label for="no">No</label><br />
        </div>
      </div>
    </div>
    <div class="page-navigation">
      <router-link class="prv-btn" to="/info">Back</router-link>
      <router-link class="nxt-btn" to="/thanks">Next</router-link>
    </div>
  </div>
</template>
<script>
import FormLeft from "@/components/FormLeft.vue";
export default {
  name: "ExperiencePage",
  components: { FormLeft },
  data() {
    return { characters: [] };
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

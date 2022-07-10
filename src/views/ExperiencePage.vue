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
          <select
            v-model="$store.state.experience_level"
            name="level"
            id="level"
            form="knowledgelvl"
          >
            <option value="" disabled selected>
              Level of knowledge<sup class="required">*</sup>
            </option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="professional">Professional</option>
          </select>
        </div>
        <CustomDropdown />

        <div class="prev-participation">
          <p>
            Have you participated In the Redberry Championship?<sup
              class="required"
              >*</sup
            >
          </p>
          <input
            v-model="$store.state.already_participated"
            type="radio"
            id="yes"
            name="participated"
            v-bind:value="true"
          />
          <label for="yes">Yes</label><br />
          <input
            v-model="$store.state.already_participated"
            type="radio"
            id="no"
            name="participated"
            v-bind:value="false"
          />
          <label for="no">No</label><br />
        </div>
      </div>
    </div>
    <div class="page-navigation">
      <router-link class="prv-btn" to="/info">Back</router-link>
      <button
        class="nxt-btn"
        @click="
          $store.commit('finish'),
            $store.state.errors.expError && $router.push('/thanks')
        "
      >
        Done
      </button>
    </div>
  </div>
</template>
<script>
import FormLeft from "@/components/FormLeft.vue";
import CustomDropdown from "@/components/CustomDropdown.vue";

export default {
  name: "ExperiencePage",
  components: { FormLeft, CustomDropdown },
};
</script>
<style scoped>
img {
  width: 50px;
}
.knowledge {
  max-width: 30%;
}
.knowledge > select {
  width: 80%;
}
</style>

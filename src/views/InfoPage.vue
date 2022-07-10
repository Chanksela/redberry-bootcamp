<template>
  <FormLeft
    :coverImg="'second.png'"
    :quote="'WHEN YOU SEE A GOOD MOVE LOOK FOR A BETTER ONE'"
    :author="'EMANUEL LASKER'"
  />
  <Popup v-if="$store.state.errors.popupError">{{
    $store.state.errors.messages.nameErrorMessage
  }}</Popup>
  <div class="right">
    <div class="right-header">
      <h6>Changable Header text</h6>
    </div>
    <div class="animation">HERE GOES THE ANIMATION</div>

    <div class="form">
      <div class="form-header">
        <h3>Personal Information</h3>
        <p>This is basic informations field</p>
      </div>
      <div class="content">
        <!-- name field -->
        <div>
          <input
            placeholder="Name"
            type="text"
            id="name"
            :class="{
              incorrectName: $store.state.errors.nameHasError,
              correctName: !$store.state.errors.nameHasError,
            }"
            v-model="$store.state.name"
            @change="$store.commit('nameInputError')"
          /><sup class="required">*</sup>
          <div
            v-if="$store.state.errors.messages.nameErrorMessage"
            class="errorMsg"
          >
            {{ $store.state.errors.messages.nameErrorMessage }}
          </div>
        </div>
        <!-- email field -->
        <div>
          <input
            placeholder="Email address"
            v-model="$store.state.email"
            type="email"
            id="email"
            :class="{
              incorrectEmail: $store.state.errors.emailHasError,
              correctEmail: $store.state.errors.emailHasError,
            }"
            @change="$store.commit('emailInputError')"
          /><sup class="required">*</sup>
          <div
            v-if="$store.state.errors.messages.emailErrorMesssage"
            class="errorMsg"
          >
            {{ $store.state.errors.messages.emailErrorMesssage }}
          </div>
        </div>
        <!-- phone field -->
        <div>
          <input
            placeholder="Phone number"
            v-model="$store.state.phone"
            type="tel"
            id="tel"
            :class="{
              incorrectPhone: $store.state.errors.phoneHasError,
              correctPhone: !$store.state.errors.phoneHasError,
            }"
            @change="$store.commit('phoneInputError')"
          /><sup class="required">*</sup>
          <div
            v-if="$store.state.errors.messages.phoneErrorMessage"
            class="errorMsg"
          >
            {{ $store.state.errors.messages.phoneErrorMessage }}
          </div>
        </div>
        <!-- DOB field -->
        <div>
          <input
            placeholder="Date of birth"
            v-model="$store.state.date_of_birth"
            type="date"
            id="date"
            :class="{
              incorrectDOB: $store.state.errors.dobHasError,
              correctDOB: !$store.state.errors.dobHasError,
            }"
            @change="$store.commit('dobInputError')"
          />

          <sup class="required">*</sup>
          <div
            v-if="$store.state.errors.messages.dobErrorMessage"
            class="errorMsg"
          >
            {{ $store.state.errors.messages.dobErrorMessage }}
          </div>
        </div>
      </div>
    </div>
    <div class="page-navigation">
      <button class="prv-btn" @click="$router.push('/')">Back</button>
      <button
        class="nxt-btn"
        @click="
          $store.commit('checkError');
          $store.state.errors.infoError && $router.push('/experience');
        "
      >
        Next
      </button>
    </div>
  </div>
</template>
<script>
import FormLeft from "@/components/FormLeft.vue";
import Popup from "../components/Popup.vue";
export default {
  name: "InfoPage",
  components: { FormLeft, Popup },
};
</script>
<style scoped>
.content {
  display: flex;
  flex-direction: column;
}
input {
  width: 30%;
}
</style>

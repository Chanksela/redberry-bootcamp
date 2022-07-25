<template>
  <div class="left">
    <FormLeft
      :coverImg="'second.png'"
      :quote="'WHEN YOU SEE A GOOD MOVE LOOK FOR A BETTER ONE'"
      :author="'EMANUEL LASKER'"
    />
  </div>
  <div class="right">
    <div class="popup-errors">
      <Popup v-if="$store.state.errors.nameHasError" inputField="Name">{{
        $store.state.errors.messages.nameErrorMessage.length > 0 &&
        $store.state.errors.messages.nameErrorMessage
      }}</Popup>
      <Popup v-if="$store.state.errors.emailHasError" inputField="Email">{{
        $store.state.errors.messages.emailErrorMesssage.length > 0 &&
        $store.state.errors.messages.emailErrorMesssage
      }}</Popup>
      <Popup v-if="$store.state.errors.phoneHasError" inputField="Phone">{{
        $store.state.errors.messages.phoneErrorMessage.length > 0 &&
        $store.state.errors.messages.phoneErrorMessage
      }}</Popup>
      <Popup
        v-if="$store.state.errors.dobHasError"
        inputField="Date of Birth"
        >{{
          $store.state.errors.messages.dobErrorMessage.length > 0 &&
          $store.state.errors.messages.dobErrorMessage
        }}</Popup
      >
    </div>
    <div class="right-header">
      <div class="header-content">Start Creating Your Account</div>
    </div>
    <div class="animation">
      <div class="animation-content">HERE GOES THE ANIMATION</div>
    </div>
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
  </div>
</template>
<script>
import Popup from "../components/Popup.vue";
import FormLeft from "@/components/FormLeft.vue";
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
.popup-errors {
  position: fixed;
}
.popup-errors > div {
  /* background-color: red; */
  margin: 5px 0;
  display: flex;
  flex-direction: column;
}
.right {
  display: flex;
  flex-direction: column;
}

.right > div {
  margin-top: 0px;
  /* margin-bottom: 100px; */
}
.content > div > input {
  margin-bottom: 20px;
}

.right-header {
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 16px;
  margin-left: 30px;
  height: 15px;
  width: 15px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 5%;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.466);
}
.animation {
  width: 100%;
  height: 15%;
  margin-top: 20px;
}
.animation > .animation-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-header {
  width: 100%;
  height: 30%;
}
.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.content > div {
  display: flex;
  flex-direction: row;
}
.content > div > input {
  width: 70%;
  height: 50%;
  display: flex;
  align-items: center;
  margin-left: 12%;
}

.page-navigation {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.page-navigation > button {
  width: 100px;
  height: 50px;
  border-radius: 8px;
  border: 1px solid #212529;
  font-family: "Open Sans", sans-serif;
}
</style>

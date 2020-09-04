<template>
  <div class="my-2">
    <v-btn
      x-large
      width="100%"
      type="submit"
      :style="{'font-family': 'IBM Plex Sans'}"
      class="submit-button-container pl-7 pr-7"
    >{{buttonName}}</v-btn>
  </div>
</template>

<script>
export default {
  name: "SubmitButton",
  props: ["buttonName"]
};
</script>

<style scoped>
.submit-button-container {
  background: #ff2e2e !important;
  border-radius: 4px !important;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: capitalize;

  color: #ffffff;
  box-shadow: none !important;
}

</style>
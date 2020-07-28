<template>
  <div class="my-2">
    <v-btn
      x-large
      width="100%"
      type="submit"
      class="pl-7 pr-7 submit-button-container"
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
  border-radius: 8px !important;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;

  color: #ffffff;
  box-shadow: none !important;
}

.submit-button-text {
  font-family: IBM Plex Sans;
  font-style: normal !important;
  font-weight: 600 !important;
  font-size: 21px !important;
  line-height: 27px !important;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;

  color: #ffffff !important;
}
</style>
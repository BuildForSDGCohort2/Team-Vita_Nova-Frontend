<template>
  <v-row>
    <v-col cols="12" md="6">
      <img src="../../../assets/semfulllogo.svg" height="30" class="login-logo" />
    </v-col>
    <v-col cols="12" md="6" class="py-0 px-0 right-bar">
      <v-btn color="red" to="/register" class="ml-10 mt-6 login-button" outlined>Register</v-btn>
    </v-col>
  </v-row>
</template>

<style  scoped>
.right-bar {
  background-color: #fff0ce;
  height: 100%;
}
.login-button {
  position: relative;
  left: 35rem;
}
.login-logo {
  position: relative;
  left: 9rem;
  top: 1rem;
}
</style>
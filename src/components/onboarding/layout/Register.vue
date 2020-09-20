<template>
  <v-responsive>
    <div>
      <v-app-bar app color="#E4F0D4" elevate-on-scroll>
        <v-btn to="/" class="onboarding-button" elevation="drawer">
          <img src="../../../assets/vitaNova/logo_vita-nova.png" alt="" height="30" />
        </v-btn>

        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down pa-3">
          <v-btn color="red" to="/register" class="login-button other-nav-button" outlined>Register</v-btn>
        </v-toolbar-items>
      </v-app-bar>
    </div>
  </v-responsive>
</template>

<style  scoped>
.login-button {
  position: relative;
  max-height: 100% !important;
  padding: 20px 28px !important;
  background-color: transparent !important;
  margin-right: 20px !important;
  text-transform: capitalize !important;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #F56C08;
  border-radius: 10px !important;
  color: #F56C08;
}
.onboarding-button {
  color: transparent !important;
  background-color: transparent !important;
}
.other-nav-button:hover::before {
  opacity: 0 !important;
}
</style>
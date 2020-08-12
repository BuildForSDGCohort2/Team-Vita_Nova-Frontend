<<<<<<< HEAD
<template>
  <LoginPage />
</template>

<script>
import LoginPage from "../../components/onboarding/LoginPage";
import { userLoggedIn } from "../../services/user-authentication";
export default {
  components: {
    LoginPage
  },
  created() {
    userLoggedIn(this);
  }
};
=======
<template>
  <LoginPage />
</template>

<script>
import LoginPage from "../../components/onboarding/LoginPage";
import { userLoggedIn } from "../../services/user-authentication";
export default {
  components: {
    LoginPage
  }
};
>>>>>>> c1941650879b0b865d556073373c517baea335fc
</script>
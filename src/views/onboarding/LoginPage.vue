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
</script>
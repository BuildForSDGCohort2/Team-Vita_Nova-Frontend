<template>
  <RegisterPage />
</template>

<script>
import RegisterPage from "../../components/onboarding/RegisterPage";
import { userLoggedIn } from "../../services/user-authentication";
export default {
  components: {
    RegisterPage
  }
};
</script>
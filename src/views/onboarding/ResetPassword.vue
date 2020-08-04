<template>
  <ResetPassword />
</template>

<script>
import ResetPassword from "../../components/onboarding/ResetPassword";
import { userLoggedIn } from "../../services/user-authentication";
export default {
  components: {
    ResetPassword
  },
  created() {
    userLoggedIn(this);
  }
};
</script>
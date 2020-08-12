<<<<<<< HEAD
<template>
  <RegisterPage />
</template>

<script>
import RegisterPage from "../../components/onboarding/RegisterPage";
import { userLoggedIn } from "../../services/user-authentication";
export default {
  components: {
    RegisterPage
  },
  created() {
    userLoggedIn(this);
  }
};
=======
<template>
  <RegisterPage />
</template>

<script>
import RegisterPage from "../../components/onboarding/RegisterPage";
import { userLoggedIn } from "../../services/user-authentication";
export default {
  components: {
    RegisterPage
  },
  created() {
    userLoggedIn(this);
  }
};
>>>>>>> c1941650879b0b865d556073373c517baea335fc
</script>
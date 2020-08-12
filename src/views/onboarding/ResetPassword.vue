<template>
<<<<<<< HEAD
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
=======
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
>>>>>>> c1941650879b0b865d556073373c517baea335fc
</script>
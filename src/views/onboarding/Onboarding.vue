<template>
  <div>
    <SectionA />
    <SectionB />
    <SectionC />
    <SectionD />
    <Footer />
  </div>
</template>

<script>
import SectionA from "../../components/onboarding/landingPage/SectionA";
import SectionB from "../../components/onboarding/landingPage/SectionB";
import SectionC from "../../components/onboarding/landingPage/SectionC";
import SectionD from "../../components/onboarding/landingPage/SectionD";
import Footer from "../../components/onboarding/layout/Footer";
import { userLoggedIn } from "@/services/user-authentication";
export default {
  components: {
    SectionA,
    SectionB,
    SectionC,
    SectionD,
    Footer
  },
  created() {
    userLoggedIn(this);
  }
};
</script>
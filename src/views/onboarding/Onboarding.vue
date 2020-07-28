<template>
  <div>
    <HeroSection />
    <CompanyLogos />
    <PlanDescription />
    <DisplaySection />
  </div>
</template>

<script>
import HeroSection from "../../components/onboarding/landingPage/HeroSection";
import CompanyLogos from "../../components/onboarding/landingPage/CompanyLogos";
import PlanDescription from "../../components/onboarding/landingPage/PlanDescription";
import DisplaySection from "../../components/onboarding/landingPage/DisplaySection";
import { userLoggedIn } from "../../services/user-authentication";
export default {
  components: {
    HeroSection,
    CompanyLogos,
    PlanDescription,
    DisplaySection
  },
  created() {
    userLoggedIn(this);
  }
};
</script>
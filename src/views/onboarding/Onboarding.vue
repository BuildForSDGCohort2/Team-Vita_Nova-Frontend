<template>
  <div>
    <HeroSection />
    <CompanyLogos />
    <PlanDescription />
    <DisplaySection />
    <Testimonies />
  </div>
</template>

<script>
import HeroSection from "../../components/onboarding/landingPage/HeroSection";
import CompanyLogos from "../../components/onboarding/landingPage/CompanyLogos";
import PlanDescription from "../../components/onboarding/landingPage/PlanDescription";
import DisplaySection from "../../components/onboarding/landingPage/DisplaySection";
import Testimonies from "../../components/onboarding/landingPage/Testimonies";
import { userLoggedIn } from "../../services/user-authentication";
export default {
  components: {
    HeroSection,
    CompanyLogos,
    PlanDescription,
    DisplaySection,
    Testimonies
  },
  created() {
    userLoggedIn(this);
  }
};
</script>
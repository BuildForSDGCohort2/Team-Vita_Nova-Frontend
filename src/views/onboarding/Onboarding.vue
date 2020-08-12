<<<<<<< HEAD
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
=======
<template>
  <div>
    <HeroSection />
    <CompanyLogos />
    <PlanDescription />
    <DisplaySection />
    <Testimonies />
    <Partners />
    <Footer />
  </div>
</template>

<script>
import HeroSection from "../../components/onboarding/landingPage/HeroSection";
import CompanyLogos from "../../components/onboarding/landingPage/CompanyLogos";
import PlanDescription from "../../components/onboarding/landingPage/PlanDescription";
import DisplaySection from "../../components/onboarding/landingPage/DisplaySection";
import Testimonies from "../../components/onboarding/landingPage/Testimonies";
import Partners from "../../components/onboarding/landingPage/Partners";
import Footer from "../../components/onboarding/layout/Footer";
import { userLoggedIn } from "../../services/user-authentication";
export default {
  components: {
    HeroSection,
    CompanyLogos,
    PlanDescription,
    DisplaySection,
    Testimonies,
    Partners,
    Footer
  },
  created() {
    userLoggedIn(this);
  }
};
>>>>>>> c1941650879b0b865d556073373c517baea335fc
</script>
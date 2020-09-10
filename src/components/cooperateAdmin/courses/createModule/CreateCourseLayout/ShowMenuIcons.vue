<template>
  <div>

    <DropDown :title="activities.title" class="my-10">
      <MenuIcons />
    </DropDown>

  </div>
</template>

<script>
import MenuIcons from "@/components/cooperateAdmin/courses/createModule/CreateCourseLayout/MenuIcons";
import DropDown from "@/components/cooperateAdmin/courses/createModule/CreateCourseLayout/DropDown";
export default {
  components: {
    MenuIcons,
    DropDown
  },
  data() {
    return {
      activities:
        {
          title: "Inspirational Phase"
        },

      userState: this.$store.state.onboarding.status.loggedIn
    };
  }
};
</script>

<style scoped>
</style>
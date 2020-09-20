export function userLoggedIn(vueThis) {
  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  if (user) {
    vueThis.$router.push("/dashboard");
  }
}

export function userLoggedOut(vueThis) {
  let loggedIn = vueThis.$store.state.onboarding.status.loggedIn;

  if (!loggedIn) {
    vueThis.$router.push("/");
  }
}

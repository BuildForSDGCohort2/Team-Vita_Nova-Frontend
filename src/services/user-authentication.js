<<<<<<< HEAD
export function userLoggedIn(vueThis) {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user)

    if (user) {
        vueThis.$router.push("/cooperate/dashboard");
    }

}

export function userLoggedOut(vueThis) {

    let loggedIn = vueThis.$store.state.onboarding.status.loggedIn;

    if (!loggedIn) {
        vueThis.$router.push("/");
    }
=======
export function userLoggedIn(vueThis) {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user)

    if (user) {
        vueThis.$router.push("/cooperate/dashboard");
    }

}

export function userLoggedOut(vueThis) {

    let loggedIn = vueThis.$store.state.onboarding.status.loggedIn;

    if (!loggedIn) {
        vueThis.$router.push("/");
    }
>>>>>>> c1941650879b0b865d556073373c517baea335fc
}
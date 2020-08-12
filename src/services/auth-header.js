<<<<<<< HEAD
export default function authHeader() {

    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.access) {
        return { Authorization: 'Bearer' + user.access };
    } else {
        return {};
    }

=======
export default function authHeader() {

    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.access) {
        return { Authorization: 'Bearer' + user.access };
    } else {
        return {};
    }

>>>>>>> c1941650879b0b865d556073373c517baea335fc
}
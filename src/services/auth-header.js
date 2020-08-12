export default function authHeader() {

    let user = JSON.parse(localStorage.getItem('userToken'));

    if (user && user.access) {
        return { Authorization: `Bearer ${user.access}` };
    } else {
        return {};
    }

}
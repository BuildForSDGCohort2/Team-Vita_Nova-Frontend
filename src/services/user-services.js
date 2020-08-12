<<<<<<< HEAD
import axios from 'axios';
import authHeader from "./auth-header";
const API_URL = 'https://lamp-api.herokuapp.com';

class UserService {
    static getCorporateDashBoard() {
        return axios.get(API_URL + 'corporate', { headers: authHeader() });
    }

    static getDepartmentLead() {
        return axios.get(API_URL + 'business/department/get_company_members/?organisation=Semicolon');
    }

    static handleCreateDepartment(data) {
        return axios.post(API_URL + '/business/department/add_department/', data, { headers: authHeader() });
    }

    static inviteEmployee(data) {
        console.log(data)
        return axios.post(API_URL + '/admin_mass_upload/', data)
    }


} export default UserService
=======
import axios from 'axios';
import authHeader from "./auth-header";
const API_URL = 'https://lamp-api.herokuapp.com';

class UserService {
    static getCorporateDashBoard() {
        return axios.get(API_URL + 'corporate', { headers: authHeader() });
    }

    static getDepartmentLead() {
        return axios.get(API_URL + 'business/department/get_company_members/?organisation=Semicolon');
    }

    static handleCreateDepartment(data) {
        return axios.post(API_URL + '/business/department/add_department/', data, { headers: authHeader() });
    }

    static inviteEmployee(data) {
        console.log(data)
        return axios.post(API_URL + '/admin_mass_upload/', data)
    }


} export default UserService
>>>>>>> c1941650879b0b865d556073373c517baea335fc
    ;
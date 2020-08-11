import axios from 'axios';
import authHeader from "./auth-header";
const API_URL = 'https://lamp-api.herokuapp.com';

class UserService {
    static getCorporateDashBoard() {
        return axios.get('corporate', { headers: authHeader() });
    }

    static getDepartmentLead() {
        return axios.get('business/department/get_company_members/?organisation=Semicolon');
    }

    static handleCreateDepartment(data) {
        return axios.post('/business/department/add_department/', data, { headers: authHeader() });
    }

    static inviteEmployee(data) {
        console.log(data)
        console.log(authHeader())
        return axios.post('/business/admin_mass_upload/', data, { headers: authHeader() })
    }


} export default UserService
    ;
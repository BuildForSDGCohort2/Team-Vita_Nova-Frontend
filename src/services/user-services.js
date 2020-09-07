import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "https://lamp-api.herokuapp.com";

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
    static handleResetPassword(data) {
        return axios.post(API_URL + '/api/accounts/send-reset-password-link/', data);
    }

    static async addEmployee(data, file) {
        let user = JSON.parse(localStorage.getItem('userToken'));

        if (data) {
            return await axios.post('/business/admin_mass_upload/', data, { headers: authHeader() })
        }
        else {
            let formData = new FormData();
            formData.append("file", file);
            return await axios({
                method: "POST",
                url: '/business/admin_mass_upload/',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${user.access}`
                }
            })
        }
    }

    static async getEmployees() {
        return await axios.get('/business/department/get_company_members/', { headers: authHeader() })
    }
    static handleCreateCourseModule(data) {
        console.log(data)
        return axios.post(API_URL + '/business/company/create_course_module', data, { headers: authHeader() })
    }

    static getProfile() {
        return axios.get(API_URL + '/business/company/get_company_profile/', { headers: authHeader() });
    }
    static Profile(data) {
        console.log(data)
        return axios.patch(API_URL + '/business/company/update_company_profile/', data, { headers: authHeader() });
    }


}
export default UserService;

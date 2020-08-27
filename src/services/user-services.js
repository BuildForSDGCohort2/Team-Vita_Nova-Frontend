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
        return axios.post(API_URL + '/api/accounts/send-reset-password-link/', data,);
    }

    static inviteEmployee(data, file) {
        let user = JSON.parse(localStorage.getItem('userToken'));
        console.log(user)
        if (data) {
            console.log(data)
            console.log(authHeader())
            return axios.post('/business/admin_mass_upload/', data, { headers: authHeader() })
        }
        else {
            let formData = new FormData();
            formData.append("file", file);
            return axios({
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


}
export default UserService;

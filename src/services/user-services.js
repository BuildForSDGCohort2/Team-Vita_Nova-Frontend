import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "https://vitanova.herokuapp.com";

class UserService {
    static getDashBoard() {
        return axios.get("dashboard", { headers: authHeader() });
    }
    static handleCreateSendOrder(data) {
        console.log(data)
        return axios.post(API_URL + '/logic/sender/post_send_order/', data, { headers: authHeader() });
    }
    static handleCreateDistributorRequest(data) {
        console.log(data)
        return axios.post(API_URL + '/logic/distributor/post_distributor_request/', data, { headers: authHeader() });
    }
    static getDistributorRequest() {
        return axios.get(API_URL + '/logic/distributor/get_distributors/', { headers: authHeader() });
    }
    static getSendOrders() {
        return axios.get(API_URL + '/logic/sender/get_booked_send_orders/',
            { headers: authHeader() });
    }


  static getProfile() {
    return axios.get(API_URL + '/business/company/get_company_profile/', { headers: authHeader() });
  }
    static Profile(data) {
        console.log(data)
        return axios.patch(API_URL + '/business/company/update_company_profile/', data, { headers: authHeader() });
    }

    static handleContactUs(data) {
        return axios.post(API_URL + '/class/course/', data,);
    }
}
export default UserService;

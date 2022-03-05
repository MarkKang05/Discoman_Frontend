import axios from "axios";
axios.defaults.withCredentials = true;


function validateAdmin() {
    return axios.get("http://localhost:8080/auth/admin/validateAdmin");
}

// function queryMembers() {
//     return axios.get(`${process.env.VUE_APP_BASEURL}/api/admin/members`);
// }


export {
    validateAdmin,
}
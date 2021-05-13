import axios from 'axios';

const LOGIN_API_BASE_URL = "http://localhost:8082/api/login";

class LoginService {
    
    signin(loginData){
        console.log(loginData);

        return axios.post(LOGIN_API_BASE_URL,
            loginData);
    }
}

export default new LoginService()
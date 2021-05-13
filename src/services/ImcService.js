import axios from 'axios';

//const EMPLOYEE_API_BASE_URL = "http://35.223.20.167:8085/api/auth/estados";
const IMC_API_BASE_URL = "http://localhost:8082/api/device";

class ImcService {

    getImcs(){

//        var mytoken = localStorage.getItem('token') || '';
        var mytoken = sessionStorage.getItem('token') || '';

        return axios.get(IMC_API_BASE_URL, {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `${mytoken}`
            },
        });
    }

    createEmployee(employee){
        return axios.post(IMC_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(IMC_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(IMC_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(IMC_API_BASE_URL + '/' + employeeId);
    }
}

export default new ImcService()
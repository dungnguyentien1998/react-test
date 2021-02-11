import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL + '/users');
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL + '/signup', employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/users/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/users/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/users/' + employeeId);
    }
}

export default new EmployeeService()
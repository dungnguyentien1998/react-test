import axios from 'axios';

const API_BASE_URL = "http://localhost:8080";

class UserService {

    getUsers(){
        return axios.get(API_BASE_URL + '/users');
    }

    createUser(user){
        return axios.post(API_BASE_URL + '/signup', user);
    }

    getUserById(userId){
        return axios.get(API_BASE_URL + '/users/' + userId);
    }

    updateUser(user, userId){
        return axios.put(API_BASE_URL + '/users/' + userId, user);
    }

    deleteUser(userId){
        return axios.delete(API_BASE_URL + '/users/' + userId);
    }
}

export default new UserService()
import axios from 'axios';

const API_BASE_URL = "http://localhost:8080";

class RoomService {

    getRooms(){
        return axios.get(API_BASE_URL + '/rooms');
    }

    createRoom(room){
        return axios.post(API_BASE_URL + '/rooms', room);
    }

    getRoomById(roomId){
        return axios.get(API_BASE_URL + '/rooms/' + roomId);
    }

    updateRoom(room, roomId){
        return axios.put(API_BASE_URL + '/rooms/' + roomId, room);
    }

    deleteRoom(roomId){
        return axios.delete(API_BASE_URL + '/rooms/' + roomId);
    }
}

export default new RoomService()
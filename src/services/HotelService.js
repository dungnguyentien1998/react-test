import axios from 'axios';

const API_BASE_URL = "http://localhost:8080";

class HotelService {

    getHotels(){
        return axios.get(API_BASE_URL + '/hotels');
    }

    createHotel(hotel){
        return axios.post(API_BASE_URL + '/hotels', hotel);
    }

    getHotelById(hotelId){
        return axios.get(API_BASE_URL + '/hotels/' + hotelId);
    }

    updateHotel(hotel, hotelId){
        return axios.put(API_BASE_URL + '/hotels/' + hotelId, hotel);
    }

    deleteHotel(hotelId){
        return axios.delete(API_BASE_URL + '/hotels/' + hotelId);
    }
}

export default new HotelService()
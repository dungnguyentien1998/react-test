import React, { Component } from 'react'
import RoomService from '../../services/RoomService';

class CreateRoomComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            // We retrieve Room id from the route using the following line of code: 
            id: this.props.match.params.id, 
            hotelId: '',
            type: '',
            price: '',
            photo: '',
            amenities: '',
            capacity: '',
            max: '',
            booked: ''
            
        }
        this.changeHotelIdHandler = this.changeHotelIdHandler.bind(this);
        this.changeTypeHandler = this.changeTypeHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changePhotoHandler = this.changePhotoHandler.bind(this);
        this.changeAmenitiesHandler = this.changeAmenitiesHandler.bind(this);
        this.changeCapacityHandler = this.changeCapacityHandler.bind(this);
        this.changeMaxHandler = this.changeMaxHandler.bind(this);
        this.changeBookedHandler = this.changeBookedHandler.bind(this);
        this.saveOrUpdateRoom = this.saveOrUpdateRoom.bind(this);
    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.id === '_add') {
            return
        } else {
            RoomService.getRoomById(this.state.id).then((res) => {
                let room = res.data;
                this.setState({
                    hotelId: room.hotelId,
                    type: room.type,
                    price: room.price,
                    photo: room.photo,
                    amenities: room.amenities,
                    capacity: room.capacity,
                    max: room.max,
                    booked: room.booked,
                });
            });
        }
    }
    saveOrUpdateRoom = (e) => {
        e.preventDefault();
        let room = { hotelId: this.state.hotelId, type: this.state.type, price: this.state.price, photo: this.state.photo, amenities: this.state.amenities, capacity: this.state.capacity, max: this.state.max, booked: this.state.booked };
        console.log('Room => ' + JSON.stringify(room));

        // step 5
        if (this.state.id === '_add') {
            console.log(this.state.id);
            RoomService.createRoom(room).then(res => {
                this.props.history.push('/home');
            });
        } else {
            console.log(this.state.id);
            RoomService.updateRoom(room, this.state.id).then(res => {
                this.props.history.push('/home');
            });
        }
    }

    changeHotelIdHandler = (event) => {
        this.setState({ hotelId: event.target.value });
    }

    changeTypeHandler = (event) => {
        this.setState({ type: event.target.value });
    }

    changePriceHandler = (event) => {
        this.setState({ price: event.target.value });
    }

    changePhotoHandler = (event) => {
        this.setState({ photo: event.target.value });
    }

    changeAmenitiesHandler = (event) => {
        this.setState({ amenities: event.target.value });
    }

    changeCapacityHandler = (event) => {
        this.setState({ capacity: event.target.value });
    }

    changeMaxHandler = (event) => {
        this.setState({ max: event.target.value });
    }

    changeBookedHandler = (event) => {
        this.setState({ booked: event.target.value });
    }

    cancel() {
        this.props.history.push('/rooms');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Room</h3>
        } else {
            return <h3 className="text-center">Update Room</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> HotelId: </label>
                                        <input placeholder="HotelId" name="hotelId" className="form-control"
                                            value={this.state.hotelId} onChange={this.changeHotelIdHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Type: </label>
                                        <input placeholder="Type" name="type" className="form-control"
                                            value={this.state.type} onChange={this.changeTypeHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Price: </label>
                                        <input placeholder="Price" name="price" className="form-control"
                                            value={this.state.price} onChange={this.changePriceHandler} />
                                    </div>
    
                                    <div className="form-group">
                                        <label> Photo: </label>
                                        <input placeholder="Photo" name="photo" className="form-control"
                                            value={this.state.photo} onChange={this.changePhotoHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Amenities: </label>
                                        <input placeholder="Amenities" name="amenities" className="form-control"
                                            value={this.state.amenities} onChange={this.changeAmenitiesHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Capacity: </label>
                                        <input placeholder="Capacity" name="capacity" className="form-control"
                                            value={this.state.capacity} onChange={this.changeCapacityHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Max: </label>
                                        <input placeholder="Max" name="max" className="form-control"
                                            value={this.state.max} onChange={this.changeMaxHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Booked: </label>
                                        <input placeholder="Booked" name="booked" className="form-control"
                                            value={this.state.booked} onChange={this.changeBookedHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateRoom}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateRoomComponent
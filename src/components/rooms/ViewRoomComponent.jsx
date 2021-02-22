import React, { Component } from 'react'
import RoomService from '../../services/RoomService'

class ViewRoomComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            room: {}
        }
    }

    componentDidMount() {
        RoomService.getRoomById(this.state.id).then(res => {
            this.setState({ room: res.data });
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Room Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> HotelId: </label>
                            <div> {this.state.room.hotelId}</div>
                        </div>
                        <div className="row">
                            <label> Type: </label>
                            <div> {this.state.room.type}</div>
                        </div>
                        <div className="row">
                            <label> Price: </label>
                            <div> {this.state.room.price}</div>
                        </div>
                        <div className="row">
                            <label> Photo: </label>
                            <div> {this.state.room.photo}</div>
                        </div>
                        <div className="row">
                            <label> Amenities: </label>
                            <div> {this.state.room.amenities}</div>
                        </div>
                        <div className="row">
                            <label> Capacity: </label>
                            <div> {this.state.room.capacity}</div>
                        </div>
                        <div className="row">
                            <label> Max: </label>
                            <div> {this.state.room.max}</div>
                        </div>
                        <div className="row">
                            <label> Booked: </label>
                            <div> {this.state.room.booked}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewRoomComponent
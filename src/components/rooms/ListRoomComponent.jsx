import React, { Component } from 'react'
import RoomService from '../../services/RoomService'

class ListRoomComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rooms: []
        }
        this.addRoom = this.addRoom.bind(this);
        this.editRoom = this.editRoom.bind(this);
        this.deleteRoom = this.deleteRoom.bind(this);
    }

    deleteRoom(id) {
        RoomService.deleteRoom(id).then(res => {
            this.setState({ rooms: this.state.rooms.filter(room => room.id !== id) });
        });
    }
    viewRoom(id) {
        this.props.history.push(`/view-room/${id}`);
    }
    editRoom(id) {
        this.props.history.push(`/add-room/${id}`);
    }

    componentDidMount() {
        RoomService.getRooms().then((res) => {
            this.setState({ rooms: res.data });
        });
    }

    addRoom() {
        this.props.history.push('/add-room/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Rooms List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addRoom}> Add Room</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> HotelId</th>
                                <th> Type</th>
                                <th> Price</th>
                                <th> Photo</th>
                                <th> Amenities</th>
                                <th> Capacity</th>
                                <th> Max</th>
                                <th> Booked</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.rooms.map(
                                    room =>
                                        <tr key={room.id}>
                                            <td> {room.hotelId} </td>
                                            <td> {room.type}</td>
                                            <td> {room.price}</td>
                                            <td> {room.photo}</td>
                                            <td> {room.amenities}</td>
                                            <td> {room.capacity}</td>
                                            <td> {room.max}</td>
                                            <td> {room.booked}</td>
                                            <td>
                                                <button onClick={() => this.editRoom(room.id)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteRoom(room.id)} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewRoom(room.id)} className="btn btn-info">View </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListRoomComponent
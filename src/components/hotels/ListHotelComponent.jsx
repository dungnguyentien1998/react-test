import React, { Component } from 'react'
import HotelService from '../../services/HotelService'

class ListHotelComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hotels: []
        }
        this.addHotel = this.addHotel.bind(this);
        this.editHotel = this.editHotel.bind(this);
        this.deleteHotel = this.deleteHotel.bind(this);
    }

    deleteHotel(id) {
        HotelService.deleteHotel(id).then(res => {
            this.setState({ hotels: this.state.hotels.filter(hotel => hotel.id !== id) });
        });
    }
    viewHotel(id) {
        this.props.history.push(`/view-hotel/${id}`);
    }
    editHotel(id) {
        this.props.history.push(`/add-hotel/${id}`);
    }

    componentDidMount() {
        HotelService.getHotels().then((res) => {
            this.setState({ hotels: res.data });
        });
    }

    addHotel() {
        this.props.history.push('/add-hotel/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Hotels List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addHotel}> Add Hotel</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Address</th>
                                <th> Photo</th>
                                <th> Point</th>
                                <th> Amenities</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.hotels.map(
                                    hotel =>
                                        <tr key={hotel.id}>
                                            <td> {hotel.address} </td>
                                            <td> {hotel.photo}</td>
                                            <td> {hotel.point}</td>
                                            <td> {hotel.amenities}</td>
                                            <td>
                                                <button onClick={() => this.editHotel(hotel.id)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteHotel(hotel.id)} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewHotel(hotel.id)} className="btn btn-info">View </button>
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

export default ListHotelComponent
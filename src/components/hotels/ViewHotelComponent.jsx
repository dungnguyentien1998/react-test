import React, { Component } from 'react'
import HotelService from '../../services/HotelService'

class ViewHotelComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            hotel: {}
        }
    }

    componentDidMount() {
        HotelService.getHotelById(this.state.id).then(res => {
            this.setState({ hotel: res.data });
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Hotel Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Address: </label>
                            <div> {this.state.hotel.address}</div>
                        </div>
                        <div className="row">
                            <label> Photo: </label>
                            <div> {this.state.hotel.photo}</div>
                        </div>
                        <div className="row">
                            <label> Point: </label>
                            <div> {this.state.hotel.point}</div>
                        </div>
                        <div className="row">
                            <label> Amenities: </label>
                            <div> {this.state.hotel.amenities}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewHotelComponent
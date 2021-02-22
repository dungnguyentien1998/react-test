import React, { Component } from 'react'
import HotelService from '../../services/HotelService';

class CreateHotelComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            // We retrieve Hotel id from the route using the following line of code: 
            id: this.props.match.params.id, 
            address: '',
            photo: '',
            point: '',
            amenities: ''
            
        }
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changePhotoHandler = this.changePhotoHandler.bind(this);
        this.changePointHandler = this.changePointHandler.bind(this);
        this.changeAmenitiesHandler = this.changeAmenitiesHandler.bind(this);
        this.saveOrUpdateHotel = this.saveOrUpdateHotel.bind(this);
    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.id === '_add') {
            return
        } else {
            HotelService.getHotelById(this.state.id).then((res) => {
                let hotel = res.data;
                this.setState({
                    address: hotel.address,
                    photo: hotel.photo,
                    point: hotel.point,
                    amenities: hotel.amenities
                });
            });
        }
    }
    saveOrUpdateHotel = (e) => {
        e.preventDefault();
        let hotel = { address: this.state.address, photo: this.state.photo, point: this.state.point, amenities: this.state.amenities };
        console.log('Hotel => ' + JSON.stringify(hotel));

        // step 5
        if (this.state.id === '_add') {
            console.log(this.state.id);
            HotelService.createHotel(hotel).then(res => {
                this.props.history.push('/home');
            });
        } else {
            console.log(this.state.id);
            HotelService.updateHotel(hotel, this.state.id).then(res => {
                this.props.history.push('/home');
            });
        }
    }

    changeAddressHandler = (event) => {
        this.setState({ address: event.target.value });
    }

    changePhotoHandler = (event) => {
        this.setState({ photo: event.target.value });
    }

    changePointHandler = (event) => {
        this.setState({ point: event.target.value });
    }

    changeAmenitiesHandler = (event) => {
        this.setState({ amenities: event.target.value });
    }


    cancel() {
        this.props.history.push('/hotels');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Hotel</h3>
        } else {
            return <h3 className="text-center">Update Hotel</h3>
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
                                        <label> Address: </label>
                                        <input placeholder="Address" name="address" className="form-control"
                                            value={this.state.address} onChange={this.changeAddressHandler} />
                                    </div>
    
                                    <div className="form-group">
                                        <label> Photo: </label>
                                        <input placeholder="Photo" name="photo" className="form-control"
                                            value={this.state.photo} onChange={this.changePhotoHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Point: </label>
                                        <input placeholder="Point" name="point" className="form-control"
                                            value={this.state.point} onChange={this.changePointHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Amenities: </label>
                                        <input placeholder="Amenities" name="amenities" className="form-control"
                                            value={this.state.amenities} onChange={this.changeAmenitiesHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateHotel}>Save</button>
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

export default CreateHotelComponent
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';
import CreateHotelComponent from "../hotels/CreateHotelComponent";
import ListHotelComponent from "../hotels/ListHotelComponent";
import ViewHotelComponent from "../hotels/ViewHotelComponent";
import CreateUserComponent from '../users/CreateUserComponent';
import ListUserComponent from '../users/ListUserComponent';
import ViewUserComponent from '../users/ViewUserComponent';
import CreateRoomComponent from "../rooms/CreateRoomComponent";
import ListRoomComponent from "../rooms/ListRoomComponent";
import ViewRoomComponent from "../rooms/ViewRoomComponent";
import { routes } from "../../routes/routes";

class Home extends React.Component {

    getHome = () => {
        console.log(`in home`)
    }

    logout = () => {
        this.props.history.push('/login')
    }

    render() {
        return (
            <div>
                <Router>
                    <HeaderComponent />
                    <button className="btn btn-primary" onClick={this.getHome}>Home</button>
                    <button className="btn btn-default" onClick={this.logout}>Logout</button>
                    <br />
                    <div className="container">
                        <Switch>
                            <Route path="/home" exact component={ListUserComponent}></Route>
                            <Route path="/users" component={ListUserComponent} ></Route>
                            <Route path="/add-user/:id" component={CreateUserComponent}></Route>
                            <Route path="/view-user/:id" component={ViewUserComponent}></Route>
                            {/* <Route path = "/update-user/:id" component = {UpdateUserComponent}></Route> */}

                            <Route path="/hotels" component={ListHotelComponent}></Route>
                            <Route path="/add-hotel/:id" component={CreateHotelComponent}></Route>
                            <Route path="/view-hotel/:id" component={ViewHotelComponent}></Route>
                            {/* <Route path="/update-hotel/:id" component={UpdateHotelComponent}></Route> */}

                            <Route path="/rooms" component={ListRoomComponent}></Route>
                            <Route path="/add-room/:id" component={CreateRoomComponent}></Route>
                            <Route path="/view-room/:id" component={ViewRoomComponent}></Route>
                            {/* <Route path="/update-room/:id" component={UpdateRoomComponent}></Route> */}
                            
                            {
                                routes.map(r => <Route key={r.path} path={r.path} exact={r.exact} component={r.component} name={r.name} />)
                            }
                        </Switch>

                    </div>
                    <FooterComponent />
                </Router>
            </div>
        )
    }
}

export default Home;
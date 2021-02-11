import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListEmployeeComponent from '../ListEmployeeComponent';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';
import CreateEmployeeComponent from '../CreateEmployeeComponent';
import ViewEmployeeComponent from '../ViewEmployeeComponent';

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
                            <Route path="/home" exact component={ListEmployeeComponent}></Route>
                            <Route path="/employees" component={ListEmployeeComponent}></Route>
                            <Route path="/add-employee/:id" component={CreateEmployeeComponent}></Route>
                            <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route>
                            {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                        </Switch>
                        
                    </div>
                    <FooterComponent />
                </Router>
            </div>
        )
    }
}

export default Home;
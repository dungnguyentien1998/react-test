import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import ApiFun from '../../services/api'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            goto: false
        }
    }

    componentWillMount() {
        console.log("Component will mount")
    }

    getLogin = () => {
        console.log(`in login`, this.state.username, this.state.password)
        ApiFun.postApi('login', { username: this.state.username, password: this.state.password })
            .then(json => {
                console.log(json.data.role)
                if (json.data.role === 0) {
                    this.props.history.push('/home')
                }
                else {
                    this.props.history.push('/login')
                }
            }).catch((error) => {
                alert('login failed. Try later!')
            })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login Form</h2>
                <form name="form">
                    <div className='form-group'>
                        <label>username:</label>
                        <input type="username" name="username" className="form-control" onChange={this.handleChange} value={this.state.username} />
                    </div>
                    <div className='form-group'>
                        <label>Password: </label>
                        <input type="password" name="password" className="form-control" onChange={this.handleChange} value={this.state.password} />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.getLogin}>Login</button>
                    <Link to="/register" className="btn btn-link">Register</Link>
                </form>
            </div>

        )
    }

}

export default withRouter(Login);

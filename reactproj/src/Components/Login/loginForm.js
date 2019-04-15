import React, { Component } from 'react';
import { baseUrl } from '../../Common/config';
import axios from 'axios'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChangeEmail = (e) => {
        //  console.log(e.target.value)
        this.setState({ email: e.target.value });
    }
    handleChangePass = (e) => {
        // console.log(e.target.value)
        this.setState({ password: e.target.value })
    }
    login = (e) => {
        e.preventDefault();
        axios.post(baseUrl + 'login', {
            email: this.state.email,
            password: this.state.password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render() {
        return (
            <div  className="row d-flex justify-content-center">
                <div className="col-sm-4 ">
                    <form className="demoForm" onSubmit={this.login}>
                        <div style={{ borderStyle: 'ridge' }}>
                            <div className="form-group">
                                <label htmlFor="email">Username</label>
                                <input type="email" value={this.state.email} onChange={this.handleChangeEmail} className="form-control" name="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="">password</label>
                                <input type="password" value={this.state.password} onChange={this.handleChangePass} className="form-control" name="password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Sign in </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;
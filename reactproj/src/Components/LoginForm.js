import React, { Component } from 'react';
class LoginForm extends Component {
    constructor(){
        super();
        this.state = {email: '', password: ''}
    }
    state = {
        email:'',
        password:''
    }

    handleChange =(e) =>{
        console.log(e.target.email)
        this.setState({email: e.target.email});
    }
    render() {
        return (

            <form className="demoForm">
                <h2> Sing up </h2>
                <div className="form-group">
                    <lable htmlFor="email">Email Address</lable>
                    <input type="email" value={this.state.email} onChange={this.handleChange} className="form-control" name="email" />
                </div>
                <div className="form-group">
                    <lable htmlFor="password" className="form-control">password</lable>
                    <input type="password" value={this.state.password} className="form-control" name="password" />
                </div>
                <button type="submit" className="btn btn-primary">Sign up </button>
            </form>

        );
    }
}

export default LoginForm;
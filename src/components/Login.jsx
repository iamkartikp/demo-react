import React, { Component } from "react";

class Login extends Component {
    state = {
        username : "",
        password: ""
    }
    handleChage = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.username === "admin" && this.state.password=== "hello1234") {
            alert("Logined in");
            localStorage.setItem('user', 'user');
            this.props.history.push('/dashboard');
            window.location.reload();
        } else {
            alert("Enter correct Email/Password")
        }
    }
  render() {
    return (
        <form onSubmit={this.handleSubmit} className="w-50 d-flex flex-column align-items-center justify-content-center">
            <input className="form-control my-2" id="username" placeholder="Username" onChange={this.handleChage} />
            <input className="form-control my-2" type="password" id="password" placeholder="Password" onChange={this.handleChage} />
            <button className="btn btn-primary my-2">Login</button>
        </form>
    )
  }
}

export default Login;

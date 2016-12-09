import React, { Component } from 'react'
import { auth } from './auth'
import { login } from './auth'
import bg from './nyc.jpg';
import './App';
import 'materialize-css';
import './LogIn.css';


export default class LogInDashboard extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.email.value + ' ' + this.pw.value + ' ' + this.displayName.value);
    auth(this.email.value, this.pw.value, this.displayName.value)

  }

    render () {
      return (
        <div id="page">
          <div id="register">
          <h1>Register</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="black-text">Email</label>
              <input className="form-control black-text" ref={(email) => this.email = email} placeholder="Email"/>
            </div>
            <div className="form-group">
              <label className="black-text">Twitter Username</label>
              <input className="form-control black-text" ref={(displayName) => this.displayName = displayName} placeholder="Twitter Username"/>
            </div>
            <div className="form-group">
              <label className="black-text">Password</label>
              <input type="password" className="form-control black-text" placeholder="Password" ref={(pw) => this.pw = pw} />
            </div>
            <div id="registerbutton">
            <button type="submit" className="btn btn-primary">Register</button> 
            </div>
          </form>
        </div>
        </div>
      )
}
}

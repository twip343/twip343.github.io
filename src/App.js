import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Link } from 'react-router';
import '../node_modules/font-awesome/css/font-awesome.css'
import 'materialize-css';

var AUTH_TOKEN;

class App extends Component {
  componentDidMount() {
    /*var R = require("request");
    var key = "ologgyDnK6430Hv8JzFBaWmAz";
    var secret = "x95BCi9OXNvWllEvPrqX8DdCXbGvT4SDGUldNJmVTvT1Xea7Px";
    var cat = key + ":" + secret;
    var credentials = new Buffer(cat).toString('base64');
    var url = 'https://api.twitter.com/oauth2/token';
    R({ url: url,
        method: 'POST',
        headers: {
          "Authorization": "Basic " + credentials,
          "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
        },
        body: "grant_type=client_credentials"
      }, function(err, resp, body) {
        console.dir(body);
    });*/
  };
  render() {

    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper">
            <img src={logo} className="App-logo" alt="logo" /><h2>TWIP</h2>

            <Link className="link" activeClassName='active' to="/userinfo">USER INFO</Link>
          </div>
        </nav>
        {this.props.children}

      </div>
    );
  }
}


export default App;

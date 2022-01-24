
import './App.css';
import React, { Fragment, Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Register from './components/signup/Register';
import Login from './components/auth/Login';
import ForgotPassword from './components/auth/ForgotPassword';
import MyProfile from './components/auth/MyProfile'
import Dashboard from './components/products/Dashboard'
import Cart from './components/products/Cart'



export default class App extends Component {

  state = {};

  componentDidMount = () => {
    // const config = {
    //     headers: {
    //         "Authorization": localStorage.getItem('token')
    //     }
    // };

    axios.get('http://sellerbuyerservice-env.eba-cywi7kkp.us-east-2.elasticbeanstalk.com/myprofile').then(
      res => {
        // console.log(res);
        // this.setState({
        //   user: res.data
        // });

        this.setUser(res.data);

      },
      err => {
        console.log(err);
      }
    )
  };


  setUser = user => {
    this.setState({
      user: user
    });
  }


  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Navigation user={this.state.user} setUser={this.setUser} />

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className='auth-wrapper'>
            <div className='auth-inner'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login setUser={this.setUser} />} />
                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/register" element={<Register />} />
                <Route path="/forgot" element={<ForgotPassword />} />
                <Route path="/myprofile" element={<MyProfile user={this.state.user} />} />
                <Route path="/dashboard" element={<Dashboard user={this.state.user} />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </div>

          </div>
        </div>
      </BrowserRouter>
    );
  }
}


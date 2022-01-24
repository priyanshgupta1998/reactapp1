import React, { Component } from "react";
import axios from "axios";


export default class MyProfile extends Component {
    render() {
        if (this.props.user) {
            return (
                <h2>Hi {this.props.user.id} {this.props.user.name} </h2>
            );
        }
        return (
            <h2> Welcome to profile Page</h2>
            // <h2> Sorry, You are not logged in.</h2>
        );
    }
}

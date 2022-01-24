import axios from "axios";
import React, { Component, useState } from "react";
import { Row, Col } from "react-bootstrap";

import Seller from "./Seller";
import Buyer from "./Buyer";



export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = { value: 'Buyer' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }


    render() {
        return (
            <div>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>User Role:</label>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Seller">Seller</option>
                        <option value="Buyer">Buyer</option>
                    </select>
                </div>
                <div>
                    {/* {this.state.value} */}
                    {(() => {
                        if (this.state.value == "Seller") {
                            return (
                                <Seller />
                            )
                        } else {
                            return (
                                <Buyer />
                            )
                        }
                    })()}
                </div>
            </div>

        );
    }
}
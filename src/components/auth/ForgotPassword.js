
import axios from "axios";
import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Navigate } from "react-router-dom";


export default class ForgotPassword extends Component {

    handleSubmit = e => {

        e.preventDefault();
        const data = {
            email: this.email
        }
    }


    render() {

        return (
            <Row className="justify-content-md-center">
                <Col xs={5}>
                    <form onSubmit={this.handleSubmit}>
                        <h3>Forgot Password</h3>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Email"
                                onChange={e => this.email = e.target.value} />
                        </div>

                        <br></br>
                        <button className="btn btn-primary btn-block">Submit</button>
                    </form>
                </Col>

            </Row>
        );
    }
}
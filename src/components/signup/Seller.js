import axios from "axios";
import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export default class Seller extends Component {
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            id: this.id,
            name: this.name,
            userrole: 'seller',
            businessorshopname: this.businessorshopname,
            email: this.email,
            mobile: this.mnumber,
            password: this.password,
            dob: this.dob
        };
        // console.log(data);
        axios.post('http://sellerbuyerservice-env.eba-cywi7kkp.us-east-2.elasticbeanstalk.com/signup', data).then(
            res => {
                console.log(res);
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    };

    render() {
        return (
            <Row className="justify-content-md-center">
                <Col xs={5}>
                    {/* <h3>Sign Up</h3> */}
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>User ID</label>
                            <input type="text" className="form-control" placeholder="ID"
                                onChange={e => this.id = e.target.value} />
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" placeholder="Name"
                                onChange={e => this.name = e.target.value} />
                        </div>
                        <div className="form-group">
                            <label>Business</label>
                            <input type="text" className="form-control" placeholder="business or shop name"
                                onChange={e => this.businessorshopname = e.target.value} />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Email"
                                onChange={e => this.email = e.target.value} />
                        </div>
                        <div className="form-group">
                            <label>Mobile</label>
                            <input type="text" className="form-control" placeholder="Mobile Number"
                                onChange={e => this.mnumber = e.target.value} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password"
                                onChange={e => this.password = e.target.value} />
                        </div>
                        <div className="form-group">
                            <label>DOB</label>
                            <input type="text" className="form-control" placeholder="Date Of Birth"
                                onChange={e => this.dob = e.target.value} />
                        </div>
                        <br></br>
                        <button className="btn btn-primary btn-block">Sign Up</button>
                    </form>
                </Col>

            </Row>

        );
    }
}
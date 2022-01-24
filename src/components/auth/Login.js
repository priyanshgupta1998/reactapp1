
import axios from "axios";
import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default class Login extends Component {
    // class Login extends Component {
    state = {};
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            email: this.email,
            password: this.password
        }
        axios.post('http://sellerbuyerservice-env.eba-cywi7kkp.us-east-2.elasticbeanstalk.com/login', data).then(
            res => {
                // console.log(res.data);
                localStorage.setItem('token', res.data.jwttoken);

                this.setState({
                    loggedIn: true
                });
                this.props.setUser(res.data.email);
                window.location.reload(false);
            }
        ).catch(
            err => {
                console.log(err.data);
            }
        )
    };

    render() {
        if (this.state.loggedIn) {
            // return <div>{this.user}</div>
            return <Navigate to="/" replace={true} />;
        }

        return (
            <Row className="justify-content-md-center">
                <Col xs={5}>
                    <form onSubmit={this.handleSubmit}>
                        <h3>Login</h3>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Email"
                                onChange={e => this.email = e.target.value} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password"
                                onChange={e => this.password = e.target.value} />
                        </div>

                        <br></br>
                        <button className="btn btn-primary btn-block">Login</button>
                        <p className="forgot-password text-right">
                            <Link to={'/forgot'}>Forgot Password?</Link>
                        </p>
                    </form>
                </Col>

            </Row>
        );
    }
}


// export default Login;
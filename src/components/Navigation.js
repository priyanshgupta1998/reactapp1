import React, { Component } from "react";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";


export default class Navigation extends Component {

    handleLogout = () => {
        localStorage.clear();
        this.props.setUser(null);
    }


    render() {
        let buttons;
        if (this.props.user) {
            if (this.props.user.userrole == "seller") {
                buttons = (
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'>
                            <Link to={"/dashboard"} className='nav-link'>DashBoard</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/myprofile"} className='nav-link'>MyProfile</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/cart"} className='nav-link'>
                                <Badge color="secondary">
                                    <ShoppingCartIcon />{"Cart"}
                                </Badge></Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/"} onClick={this.handleLogout} className='nav-link'>Logout</Link>
                        </li>
                    </ul>
                )
            } else {
                buttons = (
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'>
                            <Link to={"/myprofile"} className='nav-link'>MyProfile</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/cart"} className='nav-link'>
                                <Badge color="secondary">
                                    <ShoppingCartIcon />{"Cart"}
                                </Badge></Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/"} onClick={this.handleLogout} className='nav-link'>Logout</Link>
                        </li>
                    </ul>
                )
            }


        } else {
            buttons = (
                <ul className='navbar-nav ms-auto'>
                    <li className='nav-item'>
                        <Link to={"/login"} className='nav-link'>Login</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={"/register"} className='nav-link'>Sign up</Link>
                    </li>
                </ul>
            )
        }


        return (
            <nav className='navbar navbar-expand navbar-light fixed-top'>
                <div className='container'>
                    <Link className='navbar-brand' to={'/'}>ShoppingApp</Link>
                    <div className='collapse navbar-collapse'>

                        {buttons}
                    </div>

                </div>

            </nav>
        );
    }
}
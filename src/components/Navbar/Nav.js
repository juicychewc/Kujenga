import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Navlinks extends React.Component {
    render() {
        return (
            <div className="navbar">
                <nav>
                    <div className="nav-wrapper">
                        <ul id="nav-mobile" className="right">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            
                            <li>
                                <Link to="/Affiliates">Our Partners</Link>
                            </li>

                            <li>
                                <Link to="/Blog">Blog</Link>
                            </li>

                            <li>
                                <Link to="/Contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navlinks;
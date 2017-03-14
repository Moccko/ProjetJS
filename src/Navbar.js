/**
 * Created by roman on 14/03/17.
 */

import React, {Component} from "react";
import logo from "./ireact.png";

const aStyle = {
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingTop: '5px',
    paddingBottom: '5px',
};
const imageStyle = {
    maxHeight: '100%'
};

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar fixed-top">
                <a className="navbar-brand" href="#" style={aStyle}><img src={logo} style={imageStyle}/></a>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Link</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
/**
 * Created by roman on 14/03/17.
 */

import React, {Component} from "react";
import logo from "./ireact.png";

const aStyle = {
    paddingLeft: '25px',
    paddingRight: '25px',
    paddingTop: '5px',
    paddingBottom: '5px',
};
const imageStyle = {
    maxHeight: '100%'
};

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-fixed-top container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" dataToggle="collapse"
                            dataTarget="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                    </button>
                    <a className="navbar-brand" href="#" style={aStyle} alt="Logo"><img src={logo} style={imageStyle}/></a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <form className="navbar-form navbar-left" role="search">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search"/>
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Navbar;

{/*<nav className="navbar fixed-top">*/
}
{/*<a className="navbar-brand" href="#" style={aStyle} alt="Logo"><img src={logo} style={imageStyle}/></a>*/
}
{/*<ul className="nav navbar-nav">*/
}
{/*<li className="active">*/
}
{/*<a href="#">Home</a>*/
}
{/*</li>*/
}
{/*<li>*/
}
{/*<a href="#">Link</a>*/
}
{/*</li>*/
}
{/*</ul>*/
}
{/*</nav>*/
}
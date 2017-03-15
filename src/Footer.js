/**
 * Created by roman on 14/03/17.
 */

import React, {Component} from "react";

const footerStyle = {
    position: 'absolute',
    bottom: '0',
    height: '60px',
    boxShadow: '0px -1px 2px rgba(0,0,0,0.3)',
    width: '100%',
};

const footerTextStyle = {
    margin: '20px',
    color: '#777',
};
class Footer extends Component {
    render() {
        return (
            <footer className="footer" style={footerStyle}>
                <div className="container">
                    <p style={footerTextStyle}>footer</p>
                </div>
            </footer>
        );
    }
}

export default Footer;
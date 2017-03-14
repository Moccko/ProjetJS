import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const body = (
    <div>
        <Navbar/>
        <div className="container">
            <div className="page-header">
                <h1> Title
                    <small> Subtext</small>
                </h1>
            </div>
        </div>
        <Footer/>
    </div>
);

ReactDOM.render(
    body,
    document.getElementById('root')
);

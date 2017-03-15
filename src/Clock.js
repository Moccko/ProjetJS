/**
 * Created by roman on 14/03/17.
 */
import React, {Component} from "react";
import "./Widget.css";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (

            <div className="panel panel-info col-md-4">
                <span className="glyphicon glyphicon-trash close"/>
                <div className="panel-heading">
                    <h3 className="panel-title">Horloge</h3>
                </div>
                <div className="panel-body">
                    <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                </div>
            </div>
        );
    }
}

export default Clock;

{/*<div className="Widget">*/
}
{/*<div className="container-fluid">*/
}
{/*<div className="ToolTip">*/
}
{/*<span>Clock</span>*/
}
{/*<button className="close">&times;</button>*/
}
{/*</div>*/
}
{/*<h2>It is {this.state.date.toLocaleTimeString()}.</h2>*/
}
{/*<p>21 mars 1997</p>*/
}
{/*</div>*/
}
{/*</div>*/
}

import React from "react";
import './Hello.css';
import 'tachyons';

class Hello extends React.Component {
    render() {
        return (
            <div className="hello tc">
                <h1>Hello World!!!!</h1>
                <div>{this.props.greeting}</div>
            </div>
        );
    }
}

export default Hello;
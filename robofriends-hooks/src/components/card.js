import React from "react";
import './card.css'
import 'tachyons'


class Card extends React.Component {
    render() {

        let img_link = `https://robohash.org/${this.props.name}?size=200x200`

        return (
            <div className="card dib br3 pa3 ma2 grow shadow-5 tc">
                <img className="card-image" src={img_link} alt="img_alt"/>
                <div className="card-name">{this.props.name}</div>
                <div className="card-email">{this.props.email}</div>
            </div>
        )
    }
}

export default Card
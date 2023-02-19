import React from 'react'
import Card from './card'

class CardList extends React.Component {
    render() {      
        console.log("Card List Rendering", this.props.robotList.length)
        let cardArray = this.createRoboCards()
        
        return (
            <div>
                {cardArray}
            </div>
        )
    }

    createRoboCards() {
        let cardArray = []
        for (let i of this.props.robotList) {
          let cardHTML = <Card key={i.id} name={i.name} email={i.email}/>
          cardArray.push(cardHTML)
        }
        return cardArray
    }


}





export default CardList
import React from "react"


class Scroll extends React.Component {

    render() {
        return (
            <div style={{overflow:'scroll', border:'5px solid black', height:'40rem'}}>
                {this.props.children}
            </div>
            
        )
    }
}

export default Scroll
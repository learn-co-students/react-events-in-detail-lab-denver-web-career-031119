// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

    handleClick = (event) =>{
        const xCoord = event.clientX
        const yCoord = event.clientY
        const Coords = [xCoord, yCoord];
        this.props.onReceiveCoordinates(Coords)
    }

    render(){
        return(
            <button onClick={this.handleClick}>Coordinate Button</button>
        )
    }
}

export default CoordinatesButton;
// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {

    handleClick = (e) => {
        const xyCoordinate = [e.screenX, e.screenY]
        this.props.onReceiveCoordinates(xyCoordinate)
    }

    render() {
        return(
            <button onClick={this.handleClick}>Coordinates Button</button>
        )
    }
}
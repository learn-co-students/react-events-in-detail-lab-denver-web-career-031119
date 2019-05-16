import React, { Component } from "react"

export default class CoordindatesButton extends Component {
  render() {
    return <button onClick={event => this.props.onReceiveCoordinates([event.clientX, event.clientY])}>!</button>
  }
}

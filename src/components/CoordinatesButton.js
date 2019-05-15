import React from 'react';

export default class CoordinatesButton extends React.Component {

  handleOnClick = (event) => {
    event.persist();
    console.log(event.clientY)
    const coordinates = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordinates);
  }


  render() {
    return(
      <button onClick={this.handleOnClick}> Click Me </button>
    )
  }

}

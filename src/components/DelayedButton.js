// Code DelayedButton Component Here
import React, {Component} from 'react'
export default class DelayedButton extends Component {
  handleClick = event => {
    event.persist()
    setTimeout(_ => {this.props.onDelayedClick(event)}, this.props.delay)
  }
  render() {
    return (
      <button
      onClick={this.handleClick}
      >yikes</button>
    )
  }
}

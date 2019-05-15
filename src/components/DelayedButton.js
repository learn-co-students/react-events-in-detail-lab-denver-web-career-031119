import React from 'react'

export default class DelayedButton extends React.Component {

  handleOnClick = e => {
    e.persist()
    window.setTimeout(this.props.onDelayedClick(e), this.props.delay)
  }

  render() {
    return (<button onClick={this.handleOnClick}> Also Click Me </button>)
  }
}

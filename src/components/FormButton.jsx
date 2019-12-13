import React, { Component } from 'react'

export default class FormButton extends Component {

  state = {
    buttonLabel: this.props.buttonLabel
  }

  render() {
    const { buttonLabel } = this.state
    return (
      <div>
        <button onClick="">{buttonLabel}</button>
      </div>
    )
  }

}
import React, { Component } from 'react'

export default class FormField extends Component {

  state = {
    fieldLabel: this.props.fieldLabel,
    fieldValue: ""
  }

  setFieldValue(e) {
    this.setState({ fieldValue: e.target.value })
  }

  render() {
    const { fieldLabel, fieldValue} = this.state
    return (
      <div>
        <label>{fieldLabel}: </label>
        <input type="text" value={fieldValue} onChange={e => this.setFieldValue(e)} />
      </div>
    )
  }

}
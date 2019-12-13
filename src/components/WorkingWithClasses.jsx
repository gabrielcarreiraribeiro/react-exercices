import React, { Component } from 'react'

export default class WorkingWithClasses extends Component {
  render() {
    const { nameClass, typeClass } = this.props
    return (
      <div>
        <input type="text" value={nameClass}/>
      </div>
    )
  }
}

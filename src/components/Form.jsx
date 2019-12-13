import React, { Component } from 'react'
import FormField from './FormField'
import FormButton from './FormButton'


export default class Form extends Component {

  state = {
    firstName: "",
    secondName: "",
    phoneNumber: ""
  }

  // constructor(props) {
  //   super(props)
  // }

  setFirstName(e) {
    this.setState({ firstName: e.target.value })
    console.log("First Name: ".concat(e.target.value))
  }

  setSecondName(e) {
    this.setState({ secondName: e.target.value })
    console.log("Second Name: ".concat(e.target.value))
  }

  setPhoneNumber(e) {
    this.setState({ phoneNumber: e.target.value })
    console.log("Phone Number: ".concat(e.target.value))
  }

  render() {
    const { firstName, secondName, phoneNumber } = this.state

    return (
      <div>
        <label>Informe seus dados abaixo:</label>

        <div>

          <FormField fieldLabel="Primeiro Nome" />
          <FormField fieldLabel="Segundo Nome" />
          <FormField fieldLabel="Telefone Celular" />
          <FormButton buttonLabel="Enviar" />

          {/* <div>
            <label>Primeiro Nome: </label>
            <input type="text" value={firstName} onChange={e => this.setFirstName(e)} />
          </div>

          <div>
            <label>Segundo Nome: </label>
            <input type="text" value={secondName} onChange={e => this.setSecondName(e)} />
          </div>

          <div>
            <label>Número do celular:</label>
            <input type="text" value={phoneNumber} onChange={e => this.setPhoneNumber(e)} />
          </div> */}

        </div>

      </div>
    )
  }
}

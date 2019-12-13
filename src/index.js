import React from 'react'
import ReactDOM from 'react-dom'

/**
 * Importing components...
 */
// import First from './components/First'
// import BomDia from './components/BomDia'
// import MultipleComponents from './components/MultipleComponents'
// import WorkingWithClasses from './components/WorkingWithClasses'
import Form from './components/Form'


/**
 * React Dom, rendering components...
 */
// ReactDOM.render(<BomDia name="Jeferson" type="programador"/>, document.getElementById('root'))
// ReactDOM.render(<BomDia name="Jeferson" type="programador"/>, document.getElementById('root'))

// ReactDOM.render(
//   <div className="multiple-components-container">
//     <label>Estou muito feliz, pois sou o <MultipleComponents.ComponentOne value="Primeiro"></MultipleComponents.ComponentOne></label>
//     <label>Estou muito feliz, pois sou o <MultipleComponents.ComponentTwo value="Segundo"></MultipleComponents.ComponentTwo></label>
//   </div>
// , document.getElementById('root'))

/**
 * TEST
 */

ReactDOM.render(
  <Form />
, document.getElementById('root'))


import React, { Component } from 'react';
import Cell from './cell.js';

export default class Matrix extends Component {

  
  
  genRow = (vals) => (
    vals.map(val => <Cell value={val}/>) // replace me and render a cell component instead!
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}

      </div>
    )
  }
  
}

const newArray = []
const colors = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
const times = 10
for(let i=0; i < times; i++){
  newArray.push(colors)
}
Matrix.defaultProps = {
  values: newArray
}
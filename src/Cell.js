import React, { Component } from 'react'

export default class Cell extends Component {

    constructor(value){
        super(value)
        this.state = {
         color: this.props.value
        }

    
    
}
    colorHandler = () => {
        this.setState({
            color: "#333"
        })
    }

    render(){
        console.log(this.props.stringy)
        return (
            <div className='cell'  style={{backgroundColor: this.state.color}}
            onClick={this.colorHandler}></div>
        )

    }
}
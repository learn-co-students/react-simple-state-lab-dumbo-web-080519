import React, { Component } from 'react';

export default class Cell extends Component{
    constructor(props){
        super(props)
        this.state={
            color: this.props.value
        }
    
    }

    handleClick=()=>{
        this.setState({
            color: "#333"
        })

        
    }

    render(){
        return <div onClick={this.handleClick} style={{backgroundColor:this.state.color}}className='cell'></div>
    }
    

}
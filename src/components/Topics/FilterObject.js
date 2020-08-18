import React, { Component } from 'react'

export default class FilterObject extends Component {
    constructor(){
        super()
        this.state ={
            unfilteredArray: [],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(value){
        this.setState({unfilteredArray: [value]})
    }


    render(){
        return(
            <div className='puzzleBox filterObjectsPB'>
                <h4>Filter Object</h4>
                <span className="puzzleText"></span>
                <input onChange={e => this.handleChange(e.target.value)} className="inputLine"/>
                <button onClick={} className="confirmationButton"></button>
                <span className="resultsBox filterObjectRB"></span>
            </div>
        )
    }
}
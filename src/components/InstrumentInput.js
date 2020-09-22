import React, { Component } from 'react'

class InstrumentInput extends Component {

  constructor(props) {
    super()
    this.state = {
      type: '',
      storeId: props.storeId,
      renderForm: false
    }
  }

  handleTypeChange = event => {
    this.setState({
      type: event.target.value
    })
  }
  
  //on submitting the form, addInstrument, passed down as a prop from the container, is used to send an 'add' action to the reducer
  handleOnSubmit = () => {
    this.props.addInstruments(this.state)
    this.setState ({
      type: ''
    })
  }

  handleOnClick = () => {
    this.setState({renderForm: true})
  }
  
  render() {
    if (this.state.renderForm === false){
      return (
        <div className="storeInfo">
          <button onClick={() => this.handleOnClick()}>Add an instrument to this store's inventory!</button>
        </div>
      )
    }
    else if (this.state.renderForm === true) {
      {/* input form contains inputs for fields specified in the backend database's "instruments" table */}
      return (
        <div className="storeInfo">
          <form onSubmit={event => this.handleOnSubmit(event)}>
            <input type="text" placeholder="Type of Instrument" onChange={this.handleTypeChange}/><br/>
            <input type="submit" value="submit"/>
          </form>
        </div>
      )
    }
    
  }
}



export default InstrumentInput
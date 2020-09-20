import React, { Component } from 'react'

class InstrumentInput extends Component {

  constructor(props) {
    super()
    this.state = {
      type: '',
      storeId: props.storeId
    }
  }

  handleTypeChange = event => {
    this.setState({
      type: event.target.value
    })
  }
  
  //on submitting the form, addMusicStore, passed down as a prop from the container, is used to send an 'add' action to the reducer
  handleOnSubmit = () => {
    this.props.addInstruments(this.state)
    this.setState ({
      type: ''
    })
  }
  
  render() {
    return (
      <div className="storeInfo">
        <h4>Add an instrument to this store's inventory!</h4>
        {/* input form contains inputs for fields specified in the backend database's "instruments" table */}
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <input type="text" placeholder="Type of Instrument" onChange={this.handleTypeChange}/><br/>
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}

export default InstrumentInput
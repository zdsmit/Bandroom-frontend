import React, { Component } from 'react'

class MusicStoreInput extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      owner: '',
      location: ''
    }
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleOwnerChange = event => {
    this.setState({
      owner: event.target.value
    })
  }

  handleLocationChange = event => {
    this.setState({
      location: event.target.value
    })
  }
  
  //on submitting the form, addMusicStore, passed down as a prop from the container, is used to send an 'add' action to the reducer
  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addMusicStores(this.state)
    this.setState ({
      name: '',
      owner: '',
      location: ''
    })
  }
  
  render() {
    return (
      <div className="storeInfo">
        <h3>Create a new music store!</h3>
        {/* input form contains inputs for all fields specified in the backend database's "stores" table (except instruments, which is handled separately on the frontend side) */}
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <input type="text" placeholder="Store's Name" onChange={this.handleNameChange}/><br/>
          <input type="text" placeholder="Owner's Name" onChange={this.handleOwnerChange}/><br/>
          <input type="text" placeholder="Store's Location" onChange={this.handleLocationChange}/><br/>
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}

export default MusicStoreInput
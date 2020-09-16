import React, { Component } from 'react'
import MusicStores from '../components/MusicStores'
import MusicStoreInput from '../components/MusicStoreInput'
import { addMusicStores } from '../actions/addMusicStores'
import { getMusicStores } from '../actions/getMusicStores'
import { connect } from 'react-redux'

//this container renders two components: one for inputting a new music store, and another to display a list of all existing music stores
class MusicStoresContainer extends Component {

  componentDidMount() {
    this.props.getMusicStores()
  }
  
  render() {
    console.log(this.props.musicStores)
    return (
      <div>
        <MusicStoreInput addMusicStores={this.props.addMusicStores}/>
        <br />
        <br />
        <MusicStores musicStores={this.props.musicStores}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  musicStores: state.musicStores,
  loading: state.loading
})

export default connect(mapStateToProps, { addMusicStores, getMusicStores })(MusicStoresContainer)
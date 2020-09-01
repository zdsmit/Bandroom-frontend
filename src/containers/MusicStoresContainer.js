import React, { Component } from 'react'
//import MusicStores from '../components/MusicStores'
import MusicStoreInput from '../components/MusicStoreInput'
import { connect } from 'react-redux'

//this container renders two components: one for inputting a new music store, and another to display a list of all existing music stores
class MusicStoresContainer extends Component {
  render() {
    return (
      <div>
        <MusicStoreInput addMusicStore={this.addMusicStore}/>
      </div>
    )
  }
}

const mapStateToProps = state => (
  {musicStores: state.musicStores}
)

const mapDispatchToProps = dispatch => ({
  addMusicStore: text => dispatch({type: 'ADD_MUSIC_STORE', text})
})

export default connect(mapStateToProps, mapDispatchToProps)(MusicStoresContainer)
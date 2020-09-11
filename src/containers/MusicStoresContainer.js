import React, { Component } from 'react'
//import MusicStores from '../components/MusicStores'
import MusicStoreInput from '../components/MusicStoreInput'
import { addMusicStores } from '../actions/addMusicStores'
import { connect } from 'react-redux'

//this container renders two components: one for inputting a new music store, and another to display a list of all existing music stores
class MusicStoresContainer extends Component {
  
  render() {
    console.log(this.props.musicStores)
    return (
      <div>
        <MusicStoreInput addMusicStores={this.props.addMusicStores}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  musicStores: state.musicStores,
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
  addMusicStore: contents => {
    console.log(contents)
    dispatch({type: 'ADD_MUSIC_STORES', contents})
  }
})

export default connect(mapStateToProps, { addMusicStores })(MusicStoresContainer)
import React, { Component } from 'react'
import { MusicStores } from '../components/MusicStores'
import { MusicStoreInput } from '../components/MusicStoreInput'
import { connect } from 'react-redux'

class MusicStoresContainer extends Component {
  render() {
    return (
      <div>
        <MusicStoreInput addMusicStore={addMusicStore}/>
        <MusicStores/>
      </div>
    )
  }
}

const mapStateToProps = state => (
  {musicStores: musicStores}
)

const mapDispatchToProps = dispatch => ({
  addMusicStore: text => dispatch({type: 'ADD_MUSIC_STORE', text})
})

export default connect(mapStateToProps, mapDispatchToProps)(MusicStoresContainer)
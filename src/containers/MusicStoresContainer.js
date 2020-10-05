import React, { Component } from 'react'
import MusicStores from '../components/MusicStores'
import MusicStoreInput from '../components/MusicStoreInput'
import { addMusicStores } from '../actions/addMusicStores'
import { getMusicStores } from '../actions/getMusicStores'
import { deleteMusicStores } from '../actions/deleteMusicStores'
import { connect } from 'react-redux'

//this container renders two components: one for inputting a new music store, and another to display a list of all existing music stores
class MusicStoresContainer extends Component {

  componentDidMount() {
    this.props.getMusicStores()
  }
  
  render() {
    return (
      <div>
        <MusicStoreInput addMusicStores={this.props.addMusicStores} getMusicStores={this.props.getMusicStores}/>
        <br />
        <br />
        <MusicStores musicStores={this.props.musicStores} deleteMusicStore={this.props.deleteMusicStores} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  musicStores: state.musicStores,
  loading: state.loading
})

export default connect(mapStateToProps, { addMusicStores, getMusicStores, deleteMusicStores })(MusicStoresContainer)
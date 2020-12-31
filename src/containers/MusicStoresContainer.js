import React, { Component } from 'react'
import MusicStores from '../components/MusicStores'
import MusicStoreInput from '../components/MusicStoreInput'
import { addMusicStores } from '../actions/addMusicStores'
import { getMusicStores } from '../actions/getMusicStores'
import { deleteMusicStores } from '../actions/deleteMusicStores'
import { alphabetizeMusicStores } from '../actions/alphabetizeMusicStores'
import { connect } from 'react-redux'

//this container renders two components: one for inputting a new music store, and another to display a list of all existing music stores
class MusicStoresContainer extends Component {

  updateRating = (status) => {
    if (status.clicked === false) {
      status.clicked = true
      this.setState({
        clicked: true,
        rating: this.state.rating + 1
      })
    } else if (status.clicked === true) {
      status.clicked = false
      this.setState({
        clicked: false,
        rating: this.state.rating - 1
      })
    }
  }

  componentDidMount() {
    this.props.getMusicStores()
  }
  
  render() {
    return (
      <div>
        <MusicStoreInput addMusicStores={this.props.addMusicStores} getMusicStores={this.props.getMusicStores}/>
        <br />
        <br />
        <MusicStores musicStores={this.props.musicStores} updateRating={this.updateRating} storeStatus={this.storeStatus} deleteMusicStore={this.props.deleteMusicStores} alphabetize={this.props.alphabetizeMusicStores}/>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  musicStores: state.musicStores,
  loading: state.loading
})

export default connect(mapStateToProps, { addMusicStores, getMusicStores, deleteMusicStores, alphabetizeMusicStores})(MusicStoresContainer)
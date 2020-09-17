import React from 'react'
import MusicStore from './MusicStore'

const MusicStores = props => {
  const musicStores = props.musicStores.map(musicStore => <MusicStore {...musicStore} key={musicStore.id} deleteMusicStore={props.deleteMusicStore} getMusicStores={props.getMusicStores}/>)

  return (
    <div>
      <h2>Music Stores</h2>
      {musicStores}
    </div>
  )
}

export default MusicStores
import React from 'react'
import MusicStore from './MusicStore'

const MusicStores = props => {
  const musicStores = props.musicStores.map(musicStore => <MusicStore {...musicStore} key={musicStore.id}/>)

  return (
    <div>
      {musicStores}
    </div>
  )
}

export default MusicStores
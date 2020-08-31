import React from 'react'

const MusicStoreInput = (props) => {
  
  const handleOnSubmit = event => {
    event.preventDefault()
    props.addMusicStore(event.target.value)
  }
  
  return (
    <div>
      <form onSubmit={event => handleOnSubmit(event)}>
        <input type="text" placeholder="Store's Name"/>
        <input type="text" placeholder="Owner's Name"/>
        <input type="text" placeholder="Store's Location"/>
        <input type="submit" value="submit"/>
      </form>
    </div>
  )
}

export default MusicStoreInput
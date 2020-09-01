import React from 'react'

const MusicStoreInput = (props) => {
  
  //on submitting the form, addMusicStore, passed down as a prop from the container, is used to send an 'add' action to the reducer
  const handleOnSubmit = event => {
    event.preventDefault()
    props.addMusicStore(event.target.value)
  }
  
  return (
    <div>
      {/* input form contains inputs for all fields specified in the backend database's "stores" table (except instruments, which is handled separately on the frontend side) */}
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
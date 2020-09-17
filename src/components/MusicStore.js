import React from 'react'

const MusicStore = props => {
  console.log(props)

  const handleOnSubmit = () => {
    props.deleteMusicStore(props.id)
  }
  
  return(
    <div className="storeInfo">
      <li><b>{props.name}</b></li>
      <li>Owner: {props.owner}</li>
      <li>Location: {props.location}</li>
      <br />
      <form onSubmit={() => handleOnSubmit()}>
        <input type="submit" value="Delete this store" />
      </form>
    </div>
  );

}

export default MusicStore
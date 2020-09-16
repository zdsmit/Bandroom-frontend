import React from 'react'

const MusicStore = props => {
  console.log(props)
  
    return(
      <div className="storeInfo">
        <li><b>{props.name}</b></li>
        <li>Owner: {props.owner}</li>
        <li>Location: {props.location}</li>
        <br />
        <button onClick={props.deleteMusicStore(props.key)}>Delete this store</button>
      </div>
    );

}

export default MusicStore
import React from 'react'

const MusicStore = props => {
  
    return(
      <div className="storeInfo">
        <li><b>{props.name}</b></li>
        <li>Owner: {props.owner}</li>
        <li>Location: {props.location}</li>
        <br />
      </div>
    );

}

export default MusicStore
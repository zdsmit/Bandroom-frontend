import React from 'react'
import InstrumentsContainer from '../containers/InstrumentsContainer'
import LikeButton from './LikeButton'

const MusicStore = props => {

  const handleOnClick = () => {
    props.deleteMusicStore(props.id)
  }
  
  return(
    <div className="storeInfo">
      <li className="storeName"><b>{props.name}</b></li>
      <li>Owner: {props.owner}</li>
      <li>Location: {props.location}</li>
      <li>Instruments in stock: </li>
      <InstrumentsContainer storeId={props.id}/>
      <br />
      <button type="submit" onClick={handleOnClick}>Delete This Store</button>
      <LikeButton />
      <br />
      <br />
    </div>
  );

}

export default MusicStore
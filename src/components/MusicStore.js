import React from 'react'
import InstrumentsContainer from '../containers/InstrumentsContainer'

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
      <li>Instruments in stock:</li>
      <InstrumentsContainer storeId={props.id}/>
      <br />
      <form onSubmit={() => handleOnSubmit()}>
        <input type="submit" value="Delete this store" />
      </form>
    </div>
  );

}

export default MusicStore
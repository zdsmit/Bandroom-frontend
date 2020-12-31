import React from 'react'

const Instrument = props => {

  const handleOnClick = () => {
    props.deleteInstruments(props.id)
  }
  
  return(
    <div className="storeInfo">
      <li>{props.instrument_type}</li>
        <button onClick={handleOnClick}>x</button>
    </div>
  );

}

export default Instrument
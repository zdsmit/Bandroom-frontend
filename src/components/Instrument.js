import React from 'react'

const Instrument = props => {

  const handleOnSubmit = () => {
    props.deleteInstruments(props.id)
  }
  
  return(
    <div className="storeInfo">
      <li>{props.instrument_type}</li>
      <form onSubmit={() => handleOnSubmit()}>
        <input type="submit" value="x" />
      </form>
    </div>
  );

}

export default Instrument
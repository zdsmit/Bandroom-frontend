import React from 'react'

const Instrument = props => {

  //const handleOnSubmit = () => {
    //props.deleteInstrument(props.id)
  //}
  
  return(
    <div className="storeInfo">
      <li>{props.instrument_type}</li>
    </div>
  );

    //<form onSubmit={() => handleOnSubmit()}>
        //<input type="submit" value="x" />
    //</form>

}

export default Instrument
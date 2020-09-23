import React from 'react'
import Instrument from './Instrument'

const Instruments = props => {
  const instruments = props.instruments.filter(instrument => instrument.store_id === props.storeId)
  const filteredInstruments = instruments.map(instrument => <Instrument {...instrument} key={instrument.id} deleteInstruments={props.deleteInstruments}/>)

  return (
    <div>
      {filteredInstruments}
    </div>
  )
}

export default Instruments
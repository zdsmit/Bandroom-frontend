import React, { Component } from 'react'
import { connect } from 'react-redux'
import InstrumentInput from '../components/InstrumentInput'
import Instruments from '../components/Instruments'
import { addInstruments } from '../actions/addInstruments'
import { getInstruments } from '../actions/getInstruments'

class InstrumentsContainer extends Component {

  componentDidMount() {
    this.props.getInstruments()
  }
  
  render() {
    return (
      <div>
        <Instruments storeId={this.props.storeId} instruments={this.props.instruments}/>
        <br />
        <InstrumentInput storeId={this.props.storeId} addInstruments={this.props.addInstruments}/>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  instruments: state.instruments,
  loading: state.loading
})

export default connect(mapStateToProps, { addInstruments, getInstruments })(InstrumentsContainer)
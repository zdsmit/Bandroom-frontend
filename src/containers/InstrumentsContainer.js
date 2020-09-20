import React, { Component } from 'react'
import { connect } from 'react-redux'
import InstrumentInput from '../components/InstrumentInput' 
import { addInstruments } from '../actions/addInstruments'

class InstrumentsContainer extends Component {
  
  render() {
    return (
      <div>
        <InstrumentInput storeId={this.props.storeId} addInstruments={this.props.addInstruments}/>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  instruments: state.instruments,
  loading: state.loading
})

export default connect(mapStateToProps, { addInstruments })(InstrumentsContainer)
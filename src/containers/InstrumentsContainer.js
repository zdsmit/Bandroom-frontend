import React, { Component } from 'react'
import { connect } from 'react-redux'

class InstrumentsContainer extends Component {
  
}

const mapStateToProps = state => ({
  instruments: state.instruments,
  loading: state.loading
})

export default connect(mapStateToProps)(InstrumentsContainer)
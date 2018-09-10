import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getData } from './selectors'
import SelectBoxBCH from './template'

class SelectBoxBCHAddresses extends React.PureComponent {
  render () {
    const { data, ...rest } = this.props

    return data.cata({
      Success: value => {
        return <SelectBoxBCH elements={value.data} {...rest} />
      },
      Failure: message => <div>{message}</div>,
      Loading: () => <div />,
      NotAsked: () => <div />
    })
  }
}

SelectBoxBCHAddresses.propTypes = {
  includeAll: PropTypes.bool
}

SelectBoxBCHAddresses.defaultProps = {
  includeAll: true
}

const mapStateToProps = (state, ownProps) => ({
  data: getData(state, ownProps)
})

export default connect(mapStateToProps)(SelectBoxBCHAddresses)

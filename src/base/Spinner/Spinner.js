import React from 'react'
import PropTypes from 'prop-types'
import { CircularProgress } from '@material-ui/core'

const Spinner = ({ size }) => {
  return (
    <CircularProgress size={size} />
  )
}

Spinner.propTypes = {
  size: PropTypes.number
}

export default Spinner

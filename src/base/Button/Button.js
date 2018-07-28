import React from 'react'
import PropTypes from 'prop-types'
import { Button as MaterialButton } from '@material-ui/core'

function Button ({ className, children }) {
  return (
    <MaterialButton className={className} variant="fab" aria-label="Add">
      {children}
    </MaterialButton>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Button

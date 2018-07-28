import React from 'react'
import PropTypes from 'prop-types'
import { Button as MaterialButton } from '@material-ui/core'

function Button ({ classes, children, onClick, active }) {
  const color = active ? 'secondary' : 'default'

  return (
    <MaterialButton onClick={onClick} variant="fab" color={color}>
      {children}
    </MaterialButton>
  )
}

Button.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
  onClick: PropTypes.func,
  active: PropTypes.bool
}

export default Button

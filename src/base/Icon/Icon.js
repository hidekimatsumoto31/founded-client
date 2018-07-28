import React from 'react'
import { get } from 'lodash'
import PropTypes from 'prop-types'

function Icon ({ name, className }) {
  const icon = require(`../../assets/icons/${name}.svg`)

  return (
    <svg className={className} viewBox={get(icon, 'default.viewBox')}>
      <use xlinkHref={`#${get(icon, 'default.id')}`} />
    </svg>
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string
}

export default Icon

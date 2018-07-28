import React from 'react'
import PropTypes from 'prop-types'

function Icon ({ name, className }) {
  const icon = require(`../../assets/icons/${name}.svg`)

  return (
    <svg className={className} viewBox={icon.default.viewBox}>
      <use xlinkHref={`#${icon.default.id}`} />
    </svg>
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string
}

export default Icon

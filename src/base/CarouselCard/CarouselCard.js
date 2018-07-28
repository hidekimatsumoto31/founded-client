import React from 'react'
import PropTypes from 'prop-types'
import styles from './CarouselCard.scss'

function CarouselCard ({ imageUrl }) {
  const backgroundImage = `url(${imageUrl})`
  return <div className={styles.carouselCard} style={{ backgroundImage }} />
}

CarouselCard.propTypes = {
  imageUrl: PropTypes.string.isRequired
}

export default CarouselCard

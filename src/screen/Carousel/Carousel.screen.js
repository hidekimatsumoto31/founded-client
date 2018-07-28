import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CarouselCard from 'src/base/CarouselCard'
import CarouselButtons from './CarouselButtons'

import styles from './Carousel.scss'

class Carousel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filters: {
        cat: true,
        shark: false
      }
    }
  }

  render () {
    return (
      <div className={styles.carousel}>
        <CarouselButtons className={styles.buttons} />
      </div>
    )
  }
}

Carousel.propTypes = {
  animals: PropTypes.array,
  isLoading: PropTypes.bool
}

export default Carousel

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Carousel extends Component {
  componentDidMount () {
    this.props.fetchAnimals()
  }

  render () {
    const { animals } = this.props

    return (
      <div>AAAA</div>
    )
  }
}

Carousel.propTypes = {
  fetchAnimals: PropTypes.func.isRequired,
  animals: PropTypes.array,
  isLoading: PropTypes.bool
}

export default Carousel

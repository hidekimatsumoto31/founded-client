import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { isEqual, isEmpty } from 'lodash'

import CarouselCard from '../../../base/CarouselCard'
import Icon from '../../../base/Icon'

import styles from './Carousel.scss'

class Carousel extends Component {
  constructor (props) {
    super(props)

    this.state = {
      current: 0,
      previous: 0
    }

    this.handlePreviousSlide = this.handlePreviousSlide.bind(this)
    this.handleNextSlide = this.handleNextSlide.bind(this)
  }

  componentWillReceiveProps (prevProps) {
    const { animals } = this.props

    if (!isEqual(animals, prevProps.animals)) {
      this.setState({
        current: 0,
        previous: 0
      })
    }
  }

  render () {
    const { animals } = this.props

    const cards = animals.map((animalUrl, index) => {
      return this.renderCarouselItem(animalUrl, index)
    })

    if (isEmpty(cards)) {
      return (
        <div className={styles.carouselWrapper}>
          <div className={styles.noImage}>No Images</div>
        </div>
      )
    }

    return (
      <div className={styles.carouselWrapper}>
        {cards}

        <ul className={styles.carouselArrows}>
          <li className={styles.carouselArrowLeft} onClick={this.handlePreviousSlide}>
            <Icon name="arrow" />
          </li>
          <li className={styles.carouselArrow} onClick={this.handleNextSlide}>
            <Icon name="arrow" />
          </li>
        </ul>
      </div>
    )
  }

  renderCarouselItem (animalUrl, index) {
    const { current, previous } = this.state

    const isCurrent = index === current
    const isFirstItem = isCurrent && current === 0 && previous === 0
    const isNext = isCurrent && this.isNextCarouselItem(index)
    const isPrevious = isCurrent && this.isPreviousCarouselItem(index)
    const isUncurrent = index === previous

    const classNames = classnames(styles.carouselCard, {
      [styles.carouselFirstItem]: isFirstItem,
      [styles.carouselNextItem]: isNext,
      [styles.carouselPreviousItem]: isPrevious,
      [styles.carouselUncurrent]: isUncurrent
    })

    return (
      <div className={classNames} key={index}>
        <CarouselCard imageUrl={animalUrl} />
      </div>
    )
  }

  changeSlide (current) {
    const previous = this.state.current

    this.setState({
      current,
      previous
    })
  }

  handleNextSlide () {
    const next = this.findNext()

    this.changeSlide(next)
  }

  handlePreviousSlide () {
    const previous = this.findPrevious()

    this.changeSlide(previous)
  }

  findNext () {
    const { current } = this.state
    const { animals } = this.props

    const next = current + 1

    if (next >= animals.length) {
      return 0
    }

    return next
  }

  findPrevious () {
    const { current } = this.state
    const { animals } = this.props

    const previous = current - 1

    if (previous < 0) {
      return animals.length - 1
    }

    return previous
  }

  isNextCarouselItem (index) {
    const { previous } = this.state

    return (index > previous && !this.isRestartPrevious()) || this.isRestartNext()
  }

  isPreviousCarouselItem (index) {
    const { previous } = this.state

    return (index < previous && !this.isRestartNext()) || this.isRestartPrevious()
  }

  isRestartNext () {
    return this.state.current === 0 && this.state.previous === (this.props.animals.length - 1)
  }

  isRestartPrevious () {
    return this.state.current === (this.props.animals.length - 1) && this.state.previous === 0
  }
}

Carousel.propTypes = {
  animals: PropTypes.array
}

Carousel.defaultProps = {
  animals: []
}

export default Carousel

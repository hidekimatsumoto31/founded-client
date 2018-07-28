import React, { Component } from 'react'
import { isEqual } from 'lodash'
import PropTypes from 'prop-types'
import CarouselCard from 'src/base/CarouselCard'
import Icon from 'src/base/Icon'
import CarouselButtons from './CarouselButtons'
import Spinner from 'src/base/Spinner'
import classnames from 'classnames'

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
    const { isLoading } = this.props

    return (
      <div className={styles.carousel}>
        <CarouselButtons className={styles.buttons} />
        { isLoading ? this.renderLoading() : this.renderCarousel() }
        <a onClick={this.handleNextSlide}>Next</a>
        <a onClick={this.handlePreviousSlide}>back</a>
      </div>
    )
  }

  renderLoading () {
    return (
      <div className={styles.loadingWrapper}>
        <div className={styles.loading}>
          <Spinner size={54} />
        </div>
      </div>
    )
  }

  renderCarousel () {
    const { animals } = this.props

    const cards = animals.map((animalUrl, index) => {
      return this.renderCarouselItem(animalUrl, index)
    })

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
  animals: PropTypes.array,
  isLoading: PropTypes.bool
}

export default Carousel

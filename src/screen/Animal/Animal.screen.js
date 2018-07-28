import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Carousel from './Carousel'
import AnimalFilterButtons from './AnimalFilterButtons'
import Spinner from '../..//base/Spinner'

import styles from './Animal.scss'

class Animal extends Component {
  render () {
    const { isLoading } = this.props

    return (
      <div className={styles.animal}>
        <AnimalFilterButtons className={styles.buttons} />
        { isLoading ? this.renderLoading() : <Carousel /> }
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
}

Animal.propTypes = {
  isLoading: PropTypes.bool
}

export default Animal

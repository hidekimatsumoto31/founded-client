import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../../../base/Button'
import Icon from '../../../base//Icon'

import styles from './AnimalFilterButtons.scss'

const findActiveFilter = (filters) => {
  return Object.keys(filters).reduce((accumulator, f) => {
    if (filters[f]) {
      return accumulator.concat(f)
    }

    return accumulator
  }, [])
}

class AnimalFilterButtons extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filters: {
        cat: true,
        shark: false
      }
    }
  }

  componentDidMount () {
    this.fetchAnimals()
  }

  fetchAnimals () {
    const { filters } = this.state
    const { fetchAnimals, resetAnimals } = this.props

    const activeFilters = findActiveFilter(filters)

    if (activeFilters.length === 1) {
      return fetchAnimals(activeFilters[0])
    }

    if (activeFilters.length === 0) {
      return resetAnimals()
    }

    return fetchAnimals()
  }

  render () {
    const { filters } = this.state
    const { className } = this.props

    const buttons = Object.keys(filters).map((buttonName, i) => {
      return <span key={i}>{this.renderButton(buttonName)}</span>
    })

    return (
      <div className={className}>
        {buttons}
      </div>
    )
  }

  renderButton (name) {
    const { filters } = this.state
    const active = filters[name]

    return (
      <div className={styles.button}>
        <Button active={active} onClick={() => this.handleClick(name)}>
          <div className={styles.icon}>
            <Icon name={name} />
          </div>
        </Button>
      </div>
    )
  }

  handleClick (name) {
    const { filters } = this.state
    const newFilters = { ...filters, [name]: !filters[name] }

    this.setState({
      filters: newFilters
    }, async () => this.fetchAnimals())
  }
}

AnimalFilterButtons.propTypes = {
  className: PropTypes.string,
  fetchAnimals: PropTypes.func.isRequired,
  resetAnimals: PropTypes.func.isRequired
}

export default AnimalFilterButtons

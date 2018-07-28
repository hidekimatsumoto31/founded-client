import React, { Component } from 'react'
import MainScreenRouter from './MainScreen.router'

import styles from './MainScreen.scss'

export default class MainScreen extends Component {
  render () {
    return (
      <div className={styles.container}>
        <MainScreenRouter />
      </div>
    )
  }
}

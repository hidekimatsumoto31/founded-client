import React, { Component } from 'react'
import AppRouter from './App.router'
import AppState from './App.state'

class App extends Component {
  render () {
    return (
      <AppState>
        <AppRouter />
      </AppState>
    )
  }
}

export default App

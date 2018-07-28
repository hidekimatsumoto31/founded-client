import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import MainScreen from 'screen/MainScreen'

const history = createBrowserHistory()

class AppRouter extends React.Component {
  render () {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={MainScreen} />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import Animal from 'screen/Animal'

class MainScreenRouter extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={Animal} />
        <Route component={() => (<div>Not found</div>)} />
      </Switch>
    )
  }
}

export default withRouter(MainScreenRouter)

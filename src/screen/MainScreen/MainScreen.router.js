import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import Carousel from 'screen/Carousel'

class MainScreenRouter extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={Carousel} />
        <Route component={() => (<div>Not found</div>)} />
      </Switch>
    )
  }
}

export default withRouter(MainScreenRouter)

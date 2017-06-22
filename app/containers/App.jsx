import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'

import NavBar from 'containers/NavBar'
import Home from 'containers/Home'
import About from 'containers/About'
import MemberList from 'containers/MemberList'
import Member from 'containers/Member'
import LoginPage from 'containers/LoginPage'
import PageNotFound from 'components/PageNotFound'

const App = () => (
  <Provider store={configureStore()}>
    <HashRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/member" component={() => (
              <div>
                <Route exact path="/member" component={MemberList} />
                <Route path="/member/:id" component={Member} />
              </div>
          )} />
          <Route path="/login" component={LoginPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>
);

export default App

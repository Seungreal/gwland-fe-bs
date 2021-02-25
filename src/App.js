import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {Provider} from'react-redux'

import rootReducer from './root.reducer'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Header,Footer,Login,News,MainPage,PlaceDetailPage,PlaceListPage,PlaceListPage2} from './cmm/pages'
import { ClientIndex } from "./cli/pages";

const store = createStore(rootReducer, applyMiddleware(createSagaMiddleware))

const App = () => ( <>
  <Provider store = {store}>
  <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route path='/place/List' component={PlaceListPage}/>
        <Route path='/place/List2' component={PlaceListPage2}/>
        <Route path='/place/detail' component={PlaceDetailPage}/>
        <Route path='/contact' component={ClientIndex}/>
        <Route component={Error}/> 
      </Switch>
      <Footer/>
      <Login/>
      <News/>
    </Router>
  </Provider>
  </>
)
export default App
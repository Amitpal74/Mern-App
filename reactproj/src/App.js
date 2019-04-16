import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import RoutingComponent from './Routes'
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './redux/reducers/rootReducer';
import { watchAppUser } from './redux/sagas'

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,{}, composeEnhancer(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(watchAppUser)
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <RoutingComponent/>
        </Router>
      </Provider>
    );
  }
}

export default App;

import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './common/header';
import Home from './pages/home'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header/ >
          <Route path='/' exact component={Home}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

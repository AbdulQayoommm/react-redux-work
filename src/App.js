import React from 'react';
import './App.css';
import Reactrouter from './Store/Router'
import store from './Store'
import {Provider} from 'react-redux'
class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
        <Reactrouter />
        </Provider>
      
      </div>
    )
  }
}

export default App;

import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './Reducer';
import Counter from './Counter';

function App() {
  let storea = createStore(reducer);
  
  return (
    <div className="App">
      <Provider store={storea}>
<Counter/>
      </Provider>
    </div>
  );
}

export default App;

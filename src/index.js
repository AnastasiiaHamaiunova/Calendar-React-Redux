import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import AddEventWindow from './containers/AddEventWindow/AddEventWindow';
import EventsList from './containers/EventsList/EventsList';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(),
);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <AddEventWindow />
      <EventsList />
    </div>
  </Provider>,
  document.getElementById('app'),
);

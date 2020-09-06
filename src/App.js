import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import RouterComponent from "./Router";
import Reducers from "./reducers";
import ReduxThunk from "redux-thunk";

export const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));

const App = () => {

  return (
    <Provider store={store}>
      <RouterComponent></RouterComponent>
    </Provider>
  );
};

export default App;

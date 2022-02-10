import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "./Store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<div>loading...</div>}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);

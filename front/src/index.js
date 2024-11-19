import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

//context providers
import AuthProvider from "./contexts/authContent";
import { Provider } from "react-redux";
import store from "./components/reducers/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AuthProvider>
      <Provider store={store}>
      <App />
      </Provider>
    </AuthProvider>
  </Router>
);

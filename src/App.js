import React from "react";
import { Provider } from "react-redux";
import store from "./store/Store";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";
const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <UserDetail/>
        <Users/>
      </div>
    </Provider>
  );
};

export default App;

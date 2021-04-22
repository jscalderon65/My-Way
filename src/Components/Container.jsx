import React, { useState } from "react";
import { firebase } from "../Firebase/FirebaseConfig";
//Functions
import { BrowserRouter, Route, Switch,Redirect} from "react-router-dom";
import Store from "../Redux/Store";
import { Provider } from "react-redux";
import { gettingData, gettingSwitchState } from "../Redux/ActionCreator";
//Components & Styles
import Header from "./Header";
import Login from "./Login";
import Routes from "./Routes";
import PlayLists from "./PlayLists";
import { ContainerStyles } from "../Styles/ContainerStyles";
import "../Styles/App.css";
import "antd/dist/antd.css";
//Functions
import { useMediaQuery } from "../customHooks/useMediaQuery";
const Container = () => {
  const [session, setSession] = useState(false);
  const mediaQuery = useMediaQuery("(max-width: 460px)");
  firebase.auth().onAuthStateChanged((validaton) => {
    if (validaton) {
      setSession(true);
      Store.dispatch(gettingSwitchState());
      Store.dispatch(gettingData());
    } else {
      setSession(false);
    }
  });
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/:NameRoute"
          component={() =>
            session === false ? (
              <Login />
            ) : (
              <Provider store={Store}>
                <div className="container-styles" style={ContainerStyles()}>
                  <Header Responsive={mediaQuery} />
                  <PlayLists Responsive={mediaQuery} />
                </div>
              </Provider>
            )
          }
        />
        <Route
          exact
          path="/"
          component={() =>
            session === false ? (
              <Login />
            ) : (
              <Provider store={Store}>
                <div className="container-styles" style={ContainerStyles()}>
                  <Header Responsive={mediaQuery} />
                  <Routes Responsive={mediaQuery} />
                </div>
              </Provider>
            )
          }
        />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};
export default Container;

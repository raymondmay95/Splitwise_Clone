import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Introduction from "./components/Introduction";
import Page_Design from "./components/Page_Design";
import Account_Page from "./components/account";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    // dispatch(commentActions.fetchComments());
  }, [dispatch]);

  return (
    <>
      <div className="App-containter">
        <Navigation isLoaded={isLoaded} />
        {isLoaded && (
          <Switch>
            <Route path="/login">
              <LoginFormPage />
            </Route>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
            <Route path="/user">
              <Account_Page isLoaded={isLoaded} />
            </Route>
            <Route path="/" exact>
              <Introduction />
              <Page_Design />
            </Route>
          </Switch>
        )}
      </div>
    </>
  );
}

export default App;

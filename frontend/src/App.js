import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Introduction from "./components/Introduction";
import ACCOUNT_PAGE from "./components/account";
import Bills from "./components/bills";
import PaymentHistory from "./components/paymentHistory";
import Wallet from "./components/wallet";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const { user } = useSelector((state) => state.session);
  useEffect(() => {
    async function getUser() {
      dispatch(sessionActions.restoreUser());
      setIsLoaded(true);
    }
    getUser();
  }, [dispatch]);
  return (
    <>
      <div className="App-containter">
        {isLoaded && (
          <Switch>
            <Route path="/login">
              <LoginFormPage />
            </Route>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
            {user && (
              <Route path="/user">
                <Navigation user={user} />
                <div className="NavSpacer"></div>
                <ACCOUNT_PAGE user={user} />
              </Route>
            )}
            {user && <Route path="/settings" exact></Route>}
            {user && (
              <Route path="/bills" exact>
                <Navigation user={user} />
                <div className="NavSpacer"></div>
                <Bills user={user} />
              </Route>
            )}
            {user && (
              <Route path="/payment-history" exact>
                <Navigation user={user} />
                <PaymentHistory user={user} />
              </Route>
            )}
            {user && (
              <Route path="/wallet" exact>
                <Navigation user={user} />
                <Wallet user={user} />
              </Route>
            )}
            <Route path="/" exact>
              <Introduction />
            </Route>
          </Switch>
        )}
      </div>
    </>
  );
}

export default App;

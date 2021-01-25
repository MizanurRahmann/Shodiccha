import { useState, useEffect } from "react";
import { auth } from "./firebase/util";
import { connect } from "react-redux";
import { setUser, clearUser } from "./redux/user/userAction";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Enter from "./pages/Enter";
import Question from "./pages/Qestion";
import Help from "./pages/Help";
import Footer from "./components/Footer";
import NoFound from "./pages/NoFound";
import UserHome from "./pages/UserHome";
import FullPageLoading from "./components/Loading/FullPageLoading";

// Components
import Dashboard from "./components/Dashboard/Dashboard";

function App({ setUser, clearUser, loading, isLogedIn }) {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        clearUser();
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {!loading ? (
              isLogedIn ? (
                <UserHome>
                  <Dashboard />
                </UserHome>
              ) : (
                <Home />
              )
            ) : (
              <FullPageLoading />
            )}
          </Route>
          <Route exact path="/apply" component={Apply} />
          <Route exact path="/enter" component={Enter} />
          <Route exact path="/query" component={Question} />
          <Route exact path="/help" component={Help} />
          <Route component={NoFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLogedIn: state.user.isLogedIn,
    loading: state.user.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user)),
    clearUser: () => {
      dispatch(clearUser());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import { useEffect } from "react";
import { auth, fdb } from "./firebase/util";
import { connect } from "react-redux";
import { setUser, clearUser, setUserProfile } from "./redux/user/userAction";
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
import About from "./pages/About";
import Activity from "./pages/Activity";

// Components
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";

function App({ setUser, setUserProfile, clearUser, loading, isLogedIn }) {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // set user to redux
        setUser(user);
        // Set user profile to redux
        fdb.collection("Users").doc(user.uid)
        .get()
        .then((doc) => {
          setUserProfile(doc.data());
        })
      } else {
        clearUser();
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Home page */}
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

          {/* Profile Page */}
          <Route exact path="/profile">
            {!loading ? (
              isLogedIn ? (
                <UserHome>
                  <Profile />
                </UserHome>
              ) : (
                <Enter />
              )
            ) : (
              <FullPageLoading />
            )}
          </Route>
          <Route exact path="/apply" component={Apply} />
          <Route exact path="/enter" component={Enter} />
          <Route exact path="/query" component={Question} />
          <Route exact path="/help" component={Help} />
          <Route exact path="/about" component={About} />
          <Route exact path="/activity/:id" component={Activity}></Route>
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
    currentUser: state.user.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user)),
    setUserProfile: (user) => dispatch(setUserProfile(user)),
    clearUser: () => { dispatch(clearUser())},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

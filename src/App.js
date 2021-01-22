import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages or Components
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Enter from "./pages/Enter";
import Question from "./pages/Qestion";
import Help from "./pages/Help";
import Footer from "./components/Footer";
import NoFound from "./pages/NoFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
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

export default App;

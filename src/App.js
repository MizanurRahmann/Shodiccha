import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages or Components
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Enter from "./pages/Enter";
import Question from "./pages/Qestion";
import Help from "./pages/Help";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/apply" component={Apply} />
        <Route exact path="/enter" component={Enter} />
        <Route exact path="/query" component={Question} />
        <Route exact path="/help" component={Help} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

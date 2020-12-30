import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages or Components
import About from "./pages/About";
import Apply from "./pages/Apply";
import Enter from "./pages/Enter";

function App() {
    return (
        <div className="App">
            <Router>
                <Route exact path="/" component={About} />
                <Route exact path="/apply" component={Apply} />
                <Route exact path="/enter" component={Enter} />
            </Router>
        </div>
    );
}

export default App;

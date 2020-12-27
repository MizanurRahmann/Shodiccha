import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages or Components
import About from "./pages/About";

function App() {
    return (
        <div className="App">
            <Router>
                <Route exact path="/" component={About} />
            </Router>
        </div>
    );
}

export default App;

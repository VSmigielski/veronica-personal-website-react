import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Containers/Home'
import About from './Containers/About'
import Work from './Containers/Work'
import Contact from './Containers/Contact'

function App() {
  return (
    <div>
      <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;

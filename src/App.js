import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Finish from './Components/Finish';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/finish" component={Finish}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

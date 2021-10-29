import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Details from './components/Details';
function App() {
  return (
    <div>
      <h1>StefanCho Profile</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/details'>Details</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/details'>
              <Details />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

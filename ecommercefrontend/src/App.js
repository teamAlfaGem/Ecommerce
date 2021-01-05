import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import SignIn from './components/Users/SignIn/SignIn'
import SignUp from './components/Users/SignUp/SignUp'
import Profile from './components/Users/Profile/Profile'

function App() {
  return (
    <div>
      <h2>Hello</h2>
      <Router>
        <Switch>
          <Route exact path="/"  component={Home}/>
          <Route exact path="/users/sign-in" component={SignIn}/>
          <Route exact path="/users/sign-up" component={SignUp}/>
          <Route exact path="/users/profile" component={Profile}/>
          <Route exact path="/products/:id" />
          <Route exact path="/cart" component={Cart}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

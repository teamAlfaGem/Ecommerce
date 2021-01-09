import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import Home from './pages/Home/Home'
import Cart from './components/Cart/Cart'
import SignIn from './components/Users/SignIn/SignIn'
import SignUp from './components/Users/SignUp/SignUp'
import Profile from './components/Users/Profile/Profile'
import SingleProductInfo from './components/Products/SingleProductInfo/SingleProductInfo'
import Products from './components/Products/Products'
import Error from './components/Error/Error'

import PageLayout from './Layouts/PageLayout'
import UsersLayout from './Layouts/UsersLayout'

function App() {
  return (
    <div>
      <Router>
        <Switch>
        
          <Route path="/users/:path" exact>
            <UsersLayout>
              <Switch>
                <Route  exact path="/users/sign-in" component={SignIn}/>
                <Route  exact path="/users/sign-up" component={SignUp}/>
                <Route  exact path="/users/profile" component={Profile}/>
                <Route component={Error} />
              </Switch>
            </UsersLayout>
          </Route>

          <Route path="/">
            <PageLayout>
              <Switch>
                <Route exact path="/"  component={Home}/>
                <Route exact path="/products/:id" component={Products}/>
                <Route exact path="/products" component={Products}/>
                <Route exact path="/products/single-product/:id" component={SingleProductInfo}/>
                <Route exact path="/cart" component={Cart}/>
                <Route component={Error} />
              </Switch>
            </PageLayout>
          </Route>
        
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
          
         


          
          
        




import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import SignIn from './components/Users/SignIn/SignIn'
import SignUp from './components/Users/SignUp/SignUp'
import Profile from './components/Users/Profile/Profile'
import SingleProductInfo from './components/Products/SingleProductInfo/SingleProductInfo'
import Products from './components/Products/Products'

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
                <Route  path="/users/sign-in" component={SignIn}/>
                <Route  path="/users/sign-up" component={SignUp}/>
                <Route  path="/users/profile" component={Profile}/>
              </Switch>
            </UsersLayout>
          </Route>

          <Route>
            <PageLayout>
              <Switch>
                <Route path="/"  component={Home}/>
                <Route path="/products/:id" component={Products}/>
                <Route path="/products" component={Products}/>
                <Route path="/products/single-product/:id" component={SingleProductInfo}/>
                <Route path="/cart" component={Cart}/>

              </Switch>
            </PageLayout>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;


          
          
        




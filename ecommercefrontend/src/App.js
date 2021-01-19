import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { ToastContainer } from "react-toastify";


import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import SignIn from './pages/Users/SignIn/SignIn'
import SignUp from './pages/Users/SignUp/SignUp'
import Profile from './pages/Users/Profile/Profile'
import SingleProductInfo from './pages/SingleProductInfo/SingleProductInfo'
import Products from './pages/Products/Products'

import Error from './components/Error/Error'

import PageLayout from './Layouts/PageLayout'
import UsersLayout from './Layouts/UsersLayout'
import AdminLayout from './Layouts/AdminLayout'

function App() {
  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        
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

          <Route path="/admin/:path" exact>
            <AdminLayout>
              <Switch>
                  
              </Switch>
            </AdminLayout>
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
          
         


          
          
        




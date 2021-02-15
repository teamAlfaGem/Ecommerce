import './App.css';
import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { ToastContainer } from "react-toastify";

import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import SignIn from './pages/Users/SignIn/SignIn'
import SignUp from './pages/Users/SignUp/SignUp'
import Profile from './pages/Users/Profile/Profile'
import SingleProductInfo from './pages/SingleProductInfo/SingleProductInfo'
import Products from './pages/Products/Products'
import AdminHome from './pages/Admin/AdminHome/AdminHome'
import AdminProducts from './pages/Admin/AdminProducts/AdminProducts'
import AdminOrders from './pages/Admin/AdminOrders/AdminOrders'
import Purchase from './pages/Purchase/Purchase';

import Error from './components/Error/Error'

import PageLayout from './Layouts/PageLayout'
import UsersLayout from './Layouts/UsersLayout'
import AdminLayout from './Layouts/AdminLayout'

import { useDispatch} from 'react-redux'
import { getProducts } from './actions/products'
import { updateUserOnRefresh } from './actions/auth'

import "./main.css"

function App() {

  const dispatch = useDispatch();
  // console.log(dispatch())
  
  useEffect(() => {
    dispatch(getProducts())
    dispatch(updateUserOnRefresh())
  }, [dispatch])
    
    
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
          
          <Route path="/admin/:path" exact>
            <AdminLayout>
              <Switch>
                <Route exact path="/admin/home"  component={AdminHome}/>
                <Route exact path="/admin/products"  component={AdminProducts}/>
                <Route exact path="/admin/orders"  component={AdminOrders}/>
                <Route component={Error} />
                  
              </Switch>
            </AdminLayout>
          </Route>

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
                <Route exact path="/purchase" component={Purchase} />
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
          
         


          
          
        





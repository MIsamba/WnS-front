import { Container } from 'react-bootstrap'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer'

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import CProfileScreen from './screens/CProfileScreen';
import RequestScreen from './screens/RequestScreen';
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProfileListScreen from './screens/ProfileListScreen'
import ProfileEditScreen from './screens/ProfileEditScreen'
import OrderListScreen from './screens/OrderListScreen'


function App() {
  return ( 
    <Router>       
    <Header />
    <main className = "py-3">
      <Container>
        <Route path='/' component = {HomeScreen} exact/>  
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/cprofile' component = {CProfileScreen} />         
 
        <Route path='/profile/:id' component = {ProfileScreen} />         
        <Route path='/request/:id?' component = {RequestScreen} />  

        <Route path='/shipping' component={ShippingScreen} />
        <Route path='/placeorder' component={PlaceOrderScreen} />
        <Route path='/order/:id' component={OrderScreen} />
        <Route path='/payment' component={PaymentScreen} />
      
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/admin/userlist' component={UserListScreen} />
        <Route path='/admin/user/:id/edit' component={UserEditScreen} />

        <Route path='/admin/profilelist' component={ProfileListScreen} />
        <Route path='/admin/profile/:id/edit' component={ProfileEditScreen} />

          

      </Container>
    </main>
      <Footer />
    </Router>
  );
}

export default App;

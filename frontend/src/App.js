import { Container  } from 'react-bootstrap'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceorderScreen from './screens/PlaceorderScreen'
import OrderScreen from './screens/OrderScreen'

function App() {
  return (
    <Router className="App">
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path='/' element={<HomeScreen/>} exact/>
              <Route path='/product/:id' element={<ProductScreen/>}/>
              <Route path='/cart' element={<CartScreen/>}/>
              <Route path='/cart/:id' element={<CartScreen/>}/>
              <Route path='/login' element={<LoginScreen/>}/>
              <Route path='/register' element={<RegisterScreen/>}/>
              <Route path='/profile' element={<ProfileScreen/>}/>
              <Route path='/shipping' element={<ShippingScreen/>}/>
              <Route path='/payment' element={<PaymentScreen/>}/>
              <Route path='/placeorder' element={<PlaceorderScreen/>}/>
              <Route path='/order/:id' element={<OrderScreen/>}/>
            </Routes>
          </Container>
        </main>
        <Footer />
    </Router>
  );
}

export default App;

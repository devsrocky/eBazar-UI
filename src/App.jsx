
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import ListByCaregory from './pages/ListByCaregory';
import ListByBrand from './pages/ListByBrand';
import Shop from './pages/Shop';
import ProductDetails from './pages/Product-details';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import Profile from './pages/Profile';
import Order from './pages/Order';
import Payment from './pages/Payment';
import Wishes from './pages/Wishes';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import InvoiceDetails from './pages/InvoiceDetails';
import NotFound from './pages/NotFound';
import UserStore from './store/UserStore';
import ProtectRoute from './helper/ProtectRoute';
import CustomerLayout from './components/user/CustomerLayout';
import { useEffect } from 'react';
import Loader from './helper/Loader';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQs from './pages/FAQs';

const App = () => {

  function ScrollToTopOnNavigation() {
    const pathname = useLocation();
    useEffect(() => {
      const scroll = () => {
        window.scrollTo(0, 0);
      };
      requestAnimationFrame(scroll)
    }, [pathname])
    return null;
  }

    return (
      <>
        <BrowserRouter>
          <Loader />
         <ScrollToTopOnNavigation/>
          <Routes>

            <Route exact path='/' element={<Home/>} />
            <Route exact path='/shop' element={<Shop/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
            <Route exact path='/faqs' element={<FAQs/>} />
            <Route exact path='/category/:cateID' element={<ListByCaregory/>} />
            <Route exact path='/by/:brandId' element={<ListByBrand/>}/>
            <Route exact path='/shop/:productID' element={<ProductDetails/>} />

            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/profile' element={<ProtectRoute><Profile/></ProtectRoute> } />
            <Route exact path='/orders' element={<ProtectRoute><Order/></ProtectRoute>} />
            <Route exact path='/payments' element={<ProtectRoute><Payment/></ProtectRoute>} />
            <Route exact path='/wishes' element={<ProtectRoute><Wishes/></ProtectRoute> } />
            <Route exact path='/carts' element={<ProtectRoute><Cart/></ProtectRoute> } />
            <Route exact path='/checkout' element={<ProtectRoute> <Checkout /></ProtectRoute>} />
            <Route exact path='/invoice-details/:invoiceId' element={<ProtectRoute><InvoiceDetails /></ProtectRoute>} />

            <Route exact path='*' element={<NotFound/>} />


            
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </>
    );



};

export default App;
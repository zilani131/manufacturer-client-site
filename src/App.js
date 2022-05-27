
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Shared.js/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import Purchase from './Page/Purchase/Purchase';
import Login from './Page/Login';
import Dashboard from './Page/Dashboard.js/Dashboard';
import Blog from './Page/Blog';
import Registration from './Page/Registration'
import RequireAuth from './Page/RequireAuth';
import Payment from './Page/Payment';
import Profile from './Page/Dashboard.js/Profile';
import MyOrder from './Page/Dashboard.js/User/MyOrder'
import Review from './Page/Dashboard.js/User/Review'
import AddProduct from './Page/Dashboard.js/Admin/AddProduct'
import MakeAdmin from './Page/Dashboard.js/Admin/MakeAdmin'
import ManageProducts from './Page/Dashboard.js/Admin/ManageProducts'
import ManageAllOrders from './Page/Dashboard.js/Admin/ManageAllOrders'
import Footer from './Shared.js/Footer'
import MyPortfolio from './Page/MyPortfolio';
import NotFound from './Page/NotFound';
function App() {
  return (
    <div className="App">

      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/purchase/:_id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
            
          <Route index element={<Profile></Profile>}></Route>
          <Route path='myorder' element={<MyOrder></MyOrder> }></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='makeadmin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='manageallorders' element={<ManageAllOrders></ManageAllOrders>}></Route>
          <Route path='manageproducts' element={<ManageProducts></ManageProducts>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          

          </Route> 
          
        <Route path='/blog' element={<Blog></Blog>}></Route> 
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route> 
        <Route path='*' element={<NotFound></NotFound>}></Route> 
        
        
      </Routes>
      <Footer></Footer>
      <ToastContainer/>
    </div>
  );
}

export default App;

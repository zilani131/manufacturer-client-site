
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
        <Route path='/payment' element={<Payment></Payment>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<Profile></Profile>}></Route>
          <Route path='myorder' element={<MyOrder></MyOrder> }></Route>
          <Route path='review' element={<Review></Review>}></Route>
          {/* <Route path='/addproduct' element={<Profile></Profile>}></Route>
          <Route path='/makeadmin' element={<Profile></Profile>}></Route>
          <Route path='/manageallorder' element={<Profile></Profile>}></Route>
          <Route path='/manageproduct' element={<Profile></Profile>}></Route> */}
         

          </Route> 
        <Route path='/blog' element={<Blog></Blog>}></Route> 
        
        
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;

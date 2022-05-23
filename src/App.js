import logo from './logo.svg';
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Shared.js/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import CustomButton from './Utilities/CustomButton';
import Purchase from './Page/Purchase/Purchase';
import Login from './Page/Login';
import Dashboard from './Page/Dashboard/Dashboard';
import Blog from './Page/Blog';
import Registration from './Page/Registration'
function App() {
  return (
    <div className="App">

      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route> 
        <Route path='/blog' element={<Blog></Blog>}></Route> 
        
        
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;

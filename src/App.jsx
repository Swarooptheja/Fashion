import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Main from './Main';
import Pagination from './Pagination';
import Home from './Home';
import Addtobasket from './Addtobasket';
// import { Router } from 'react-router-dom';
import Allroutes from './Allroutes';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WithSubnavigation from './components/Nav';

function App() {
  return (
    <div className="App">
      {/* <h1>welcome</h1> */}
      <Navbar/>

      {/* <Pagination/> */}
      {/* <WithSubnavigation/> */}
      <Allroutes/>
      <Footer/>
      
    </div>
  );
}

export default App;

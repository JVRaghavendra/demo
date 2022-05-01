import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Banner/Banner';
import Homepage from './Components/pages/Homepage';
import Contact from './Components/pages/Contact';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Services from './Components/pages/Services';
import Login from './Components/pages/Login';
import Properties from './Components/pages/Properties';


function App() {
  return (
    <div className="App">
   {/*  <Header />
    <Banner />
  <Footer /> */}
 <Router>
   <Routes>
     <Route path='/' exact element={<Homepage/>}/>
     <Route path='/Contact' exact element={<Contact/>}/>
     <Route path='/Services' exact element={<Services/>}/>
     <Route path='/Login' exact element={<Login/>}/>
     <Route path='/properties' exact element={<Properties/>}/>

   </Routes>
 </Router>
    </div>
  );
}

export default App;

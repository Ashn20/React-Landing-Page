//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './component/Navbar';
import Carousel from './component2/carousel';
import Sign from './component3/signup';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Navb/>
    <Carousel/>
    <BrowserRouter>
      <Routes>
<Route path='/signup'element={<Sign/>}>

</Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

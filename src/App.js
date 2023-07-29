
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './components/pages/home';
import Contact from './components/pages/contact/contact';
import Photos from './components/pages/photos/photos';
import Commentary from './components/pages/commentary/commentary';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/contact'element={<Contact/>}/>
        <Route path='/photos'element={<Photos/>}/>
        <Route path='/commentary'element={<Commentary/>}/>
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

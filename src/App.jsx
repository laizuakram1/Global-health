import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar'
import { Footer } from './Components/Footer/Footer';
import { Home } from './Pages/Home/Home';
import { Contact } from './Pages/Contact/Contact';
import { Shop } from './Pages/Shop/Shop';
import { About } from './Pages/About/About';


function App() {
 

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App

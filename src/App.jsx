import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import CustomNavbar from './components/Navbar/CustomNavbar'
import Products from './components/Products/Products'
import Foods from './components/Foods/Foods'
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {

  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/foods' element={<Foods />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

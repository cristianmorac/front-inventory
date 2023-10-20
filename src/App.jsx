import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Header from './components/layouts/Navbar'
import Home from './components/Home'
import User from './components/User'
import Perifericos from './components/Perifericos'
import Laptops from './components/Laptops'
import Monitor from './components/Monitores'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} >
            <Route path='/home' element={<Home />} />
            <Route path='/users' element={<User />} />
            <Route path='/laptops' element={<Laptops />} />
            <Route path='/monitores' element={<Monitor />} />
            <Route path='/perifericos' element={<Perifericos />} />
            <Route path='*' element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App

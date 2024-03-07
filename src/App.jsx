import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/AboutPage'
import ContactPage from './pages/contact/ContactPage'

function App() {

  return (
    <BrowserRouter>
      <Routes >
          <Route path='/' element={<Layout />} >
            <Route path='' element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='contact' element={<ContactPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

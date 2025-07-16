import './App.css'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import Navbar from './components/Navbar'
import CTASection from './components/CTASection'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollProgress from './components/animation/ScrollProgress'

function App() {


  return (
    <>
      <BrowserRouter>
      {/* <ScrollProgress/> */}
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <CTASection />
      </BrowserRouter>
    </>
  )
}

export default App

import './App.css'
import Home from './pages/Home'
import {Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
   
  return (
    <>
    <Navbar />
    <Home />
    <Footer />
    </>
  )
}

export default App

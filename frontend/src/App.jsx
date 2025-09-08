import './App.css'
import Header from './components/header.jsx'
import { Route, Routes} from "react-router-dom"
import Home from './components/home.jsx' 
import About from './components/about.jsx'
import Contact from './components/contact.jsx'

function App() {
      
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App

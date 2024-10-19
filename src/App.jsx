

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Popular from './pages/Popular'
import Toprated from './pages/Toprated'
import Upcoming from './pages/Upcoming'
import Navbar from './components/Navbar'
import Cast from './pages/Cast'

function App() {
  

  return (
   <div>
      <Navbar/>
      <Routes>
        <Route path='/search' element={<Home/>}/>
        <Route path='/' element={<Popular/>}/>
        <Route path='/top-rated' element={<Toprated/>}/>
        <Route path='/upcoming' element={<Upcoming/>}/>
        <Route path='/cast' element={<Cast/>}/>
      </Routes>
   </div>
  )
}

export default App

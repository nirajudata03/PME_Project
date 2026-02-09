import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App

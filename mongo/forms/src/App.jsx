import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
         
       </Routes>


    </>
  )
}

export default App

import { useState } from 'react'
import Navbar from './components/navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './pages/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Routes >
          <Route path="/" element={<Main />} >
          </Route>


        </Routes>
      </div>
    </Router>
  )
}

export default App

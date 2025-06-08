import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './pages/layout'
import Signup from './pages/authentication/signup'
import Login from './pages/authentication/login'
import Home from './pages/home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
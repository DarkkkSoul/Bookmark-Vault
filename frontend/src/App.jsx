import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './pages/layout'
import Signup from './pages/authentication/signup'
import Login from './pages/authentication/login'
import Home from './pages/home'
import AboutMe from './pages/AboutMe'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Signup />} />
                    <Route path="login" element={<Login />} />
                    <Route path='home' element={<Home />} />
                </Route>
                <Route path="/aboutme" element={<AboutMe />} />
            </Routes>
        </Router>
    )
}

export default App
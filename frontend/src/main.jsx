import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from 'react-router'
import Layout from './pages/Layout.jsx'
import SignUp from './pages/authentication/SignUp.jsx'
import LogIn from './pages/authentication/LogIn.jsx'
import Home from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <Routes>
         <Route path='/' element={<Layout/>}>
            <Route path='/signup' element={<SignUp/>}/>  
            <Route path='/login' element={<LogIn/>}/>
            <Route path='/home' element={<Home/>}/>  
         </Route>
      </Routes>
   </BrowserRouter>
)
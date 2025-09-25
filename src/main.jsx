import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import SignUpform from './components/SignUpform.jsx'
import HeroPage from './components/HeroPage/Hero.jsx'
import LoginForm from './components/LoginForm.jsx'
import StudentPortal from './components/StudentPortal.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<HeroPage />}/>
      <Route path='signup' element={<SignUpform/>}/>
      <Route path='login' element={<LoginForm/>}/>
      <Route path='student-portal' element={<StudentPortal/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

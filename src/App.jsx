
import {Toaster} from 'react-hot-toast'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import AdminLogin from './components/Admin/Login/AdminLogin'
import AdminHome from './components/Admin/AdminHome/AdminHome'
import Modals from './components/Admin/modal/Modals'
import ErrorPage from './components/Admin/ErrorPage/ErrorPage'



function App() {
  

  return (
   <div className='App'>
   <Toaster/>
   <Router>
     <Routes>
     <Route path = '*' element ={<ErrorPage/>}></Route>
     <Route path = '/' element ={<AdminLogin/>}></Route>
      <Route path = '/admin_home' element = {<AdminHome/>}></Route>
      <Route path='/modal' element={<Modals/>}></Route>
     </Routes>
   </Router>

   </div>
  )
}

export default App

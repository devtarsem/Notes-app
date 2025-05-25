
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/home'
import Auth from './components/auth'
// import './styles/media.css'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home/>,
    
  }
  ,
  {
    path : '/auth',
    element : <Auth/>,
    
  }
  
  
      
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App

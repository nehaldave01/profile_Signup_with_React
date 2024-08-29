import {Routes, Route} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import User from './User'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path ="/" element ={<Signup/>}/>
            <Route path ="/login" element={<Login/>}/>
            <Route path = "/user" element={<User/>}/>
        </Routes>
    </div>
  )
}

export default Router
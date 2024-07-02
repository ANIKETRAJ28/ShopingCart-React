import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { UserContext } from './context/UserContext'
import MainRoutes from './routes/MainRoutes'
import { CartContext } from './context/CartContext'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { jwtDecode } from 'jwt-decode'

function App() {

  const [user, setUser] = useState(null);
  const [cart, setCart] = useState({products: []});
  const [ token, setToken ] = useCookies(['jwt-token']);

  useEffect(() => {
    axios.get(`http://localhost:8765/accesstoken`, {withCredentials: true})
    .then((res) => {
      setToken('jwt-token', res.data.token, {httpOnly: true});
      const jwtToken = jwtDecode(res.data.token);
      setUser({username: jwtToken.user, id: jwtToken.id});
    });
  }, [])

  return (
    <div className="app-wrapper">
      <UserContext.Provider value={{user, setUser}}>
      <CartContext.Provider value={{cart, setCart}}>
        <NavBar color="light" light={true} expand="md" container="md"/>
        <MainRoutes/>
      </CartContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App

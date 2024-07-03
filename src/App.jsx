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
  const [cart, setCart] = useState({});
  const [ token, setToken ] = useCookies(['jwt-token']);

  useEffect(() => {
    try {
      axios.get(`${import.meta.env.VITE_FAKE_STORE_URL}/accesstoken`, {withCredentials: true})
      .then((res) => {
        if(!res.data.token) throw("cannot read jwt-token");
        setToken('jwt-token', res.data.token, {httpOnly: true});
        const jwtToken = jwtDecode(res.data.token);
        setUser({username: jwtToken.user, id: jwtToken.id});
      });
    } catch (error) {
      console.log(error);
    }
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

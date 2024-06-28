import './App.css'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import MainRoutes from './routes/MainRoutes'

function App() {

  return (
    <div className="app-wrapper">
    <NavBar color="light" light={true} expand="md" container="md"/>
    <MainRoutes/>
    </div>
  )
}

export default App

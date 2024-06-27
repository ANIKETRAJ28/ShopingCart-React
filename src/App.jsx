import './App.css'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <div className="app-wrapper">
    <NavBar color="light" light={true} expand="md" container="md" fixed="top"/>
    <Home/>
    </div>
  )
}

export default App


import { BrowserRouter as Router } from 'react-router-dom';
import Inicio from './pages/inicio/inicio';
import Proyecto from './pages/proyecto/proyecto';
import Acercademi from './pages/acercademi/acercademi';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import './App.css';
import axios from 'axios';


function App() {
  async function fetchUsers() {
  try {
    const response = await axios.get( 'http://localhost:8080/api/users' );
       console.log(response.data); 
  } catch (error) {
    console.error(error);
  }
}

fetchUsers();


  return (
   
    <Router>
    <ResponsiveAppBar />
      <Inicio />
      <Acercademi />
      <Proyecto />      
   
</Router>
  )
}

export default App

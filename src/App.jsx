import './App.css'
import Navbar from './componentes/Navbar/Navbar.jsx'
import Fondo from "./componentes/fondo/Fondo.jsx"
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.jsx'
import Footer from "./componentes/Footer/Footer";




function App() {
  

  return (
    
      <div className='container'>
        <Navbar/>
        <ItemListContainer greeting = "Bienvenido a mi tienda" />
        <Fondo/>
        <Footer />
      </div> 
        
    
  )
}

export default App

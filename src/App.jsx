import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Button/Button';

function App() {
  const [count, setCount] = useState(0)
 
  const saludar = () => {
    alert ("Hola");
 };
  return (
    // <> </> is a React.Fragment
    // a los fragment no se les puede crear un estilo
   
    <main className="container"> 
      <h1>Hola</h1>
      <Button texto="Botón Navbar" saludar ={saludar}/>
      <Button texto="Botón Sidebar"/>
      <Button texto="Botón Main"/>
    </main>
  )
}

export default App

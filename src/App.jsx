import ComponenteFuncional from "./tiposcomponentes"; //componente princial
import { ComponenteFlecha, ComponenteClase } from "./tiposcomponentes"; //componente secundario {}

function App() {
  let numero = 1;
  return (
    <>
    <ComponenteFuncional/>
    <ComponenteFlecha/>
    <ComponenteClase/>
      <h1>Hola {nombre()} {numero}</h1>
    </>
  )
}

function nombre (){
  return "Juan";
}

export default App

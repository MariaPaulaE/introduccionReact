import ComponenteFuncional from "./tiposcomponentes"; //componente princial
import { ComponenteFlecha, ComponenteClase } from "./tiposcomponentes"; //componente secundario {}

function App() {
  let numero = 1;
  let datos = {
    "nombre" : "Juan Lopez",
    "profesion" : "Psicologo",
    "salario":3000000
  }
  return (
    <>
    <ComponenteClase info = {datos}/>
    <ComponenteFuncional info = {datos} saludo = "hola"/>
    <ComponenteFlecha info = {datos}/>
      <h1>Hola {nombre()} {numero}</h1>
    </>
  )
}

function nombre (){
  return "Juan";
}

export default App

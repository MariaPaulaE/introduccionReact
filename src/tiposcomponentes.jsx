import React from "react";//para poder hacer el componente de clase

//componente de clase
export class ComponenteClase extends React.Component{
    render(){
        return (
            <h2>Componente Clase</h2>
        )
    }
}


//Componente Funcional -> la primela letra en mayuscula
//Forma 2 de exportar
export default function ComponenteFuncional (){
    return(
        <h2>Componente funcional</h2>
    )
}
//export default ComponenteFuncional; //Forma 1 de exportar el componente para que se pueda usar en otro archivo

//Componente Flecha
export let ComponenteFlecha = () => {
    return(
        <h2>Componente flecha</h2>
    )
}
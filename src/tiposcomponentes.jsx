import React from "react"; //para poder hacer el componente de clase

//componente de clase
export class ComponenteClase extends React.Component{
    render(){
        console.log(this.props)
        return (
            <>
                <h2>Componente de clase</h2>
                <p>Nombre : {this.props.info.nombre}</p>
                <p>Profesion : {this.props.info.profesion}</p>
                <p>Salario : {this.props.info.salario}</p>
            </>
        )
    }
}


//Componente Funcional -> la primela letra en mayuscula
//Forma 2 de exportar
export default function ComponenteFuncional (props){
    console.log(props);
    //Destructuracion -> Array y objetos sacar la info directamente
    let{info} = props;
    let {nombre, profesion,salario} = info;
    return(
        <>
        <h2>Componente funcional</h2>
        <p>Nombre: {nombre} </p>
        <p>Profesion: {profesion} </p>
        <p>Salario: {salario} </p>
        
        </>
    )
}

//export default ComponenteFuncional; //Forma 1 de exportar el componente para que se pueda usar en otro archivo

//Componente Flecha
export let ComponenteFlecha = (props) => {
    console.log(props);
    return(
        <>
        <h2>Componente Flecha</h2>
        <p>Nombre: {props.info.nombre} </p>
        <p>Profesion: {props.info.profesion} </p>
        <p>Salario: {props.info.salario} </p>
        
        </>
    )
}
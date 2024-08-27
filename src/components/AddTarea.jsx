import { useState } from "react"
import { pizzas } from "../js/pizzas"

const AddTarea = () => {
    
    const [carritoCompra, setcarritoCompra] = useState("")
    const [listaPizzas, setListaPizzas] = useState(pizzas) 

    // Función al enviar el formulario
    const enviarFormulario = (e) => {
        e.preventDefault()
        setListaPizzas([...listaPizzas, { nombre: carritoCompra, completada: false }])
        setcarritoCompra("") // vaciar
    }
    const capturaInput = (e) => {
        setcarritoCompra(e.target.value)
    }

    const eliminarTarea = (tarea) => {
        const listaFiltrada = listaPizzas.filter(el => el.nombre !==
        tarea.nombre)
        setListaPizzas(listaFiltrada)
    }
    
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <form onSubmit={enviarFormulario}>
                <input name="nombreTarea" onChange={capturaInput} />
                <button> Agregar Tarea </button>
            </form>
            <ul className="list-unstyled">
                {listaPizzas.map(tarea => (
                <li key={tarea.nombre} 
                    onClick={() => console.log(tarea)}
                    style={tarea.completada === true ? { textDecoration:'line-through' } : {}}>
                    {tarea.nombre}
                    <button onClick={() => eliminarTarea(tarea)}> Borrar</button>
                </li>))}
            </ul>
        </div>
    )
}

export default AddTarea
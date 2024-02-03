import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api'

const MostrarClientes = () => {

    const [Clientes, setClientes]= useState([])
    useEffect( ()=>{
        getAllClientes()
    }, [])

    const [busqueda, setBusqueda] = useState('');

    const getAllClientes = async () =>{
        const response= await axios.get(`${endpoint}/clientes`)
        setClientes(response.data)
        console.log("clientes",response.data)

    }

    const deleteClientes =async (id) =>{
        await axios.delete(`${endpoint}/cliente/${id}`)
        getAllClientes()

    }

  return (
    <div>
  <div className='d-flex align-items-center gap-2'>
  <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Crear</Link>
  <input
    type='text'
    className='form-control'
    placeholder='Buscar por nombre...'
    value={busqueda}
    onChange={(e) => setBusqueda(e.target.value)}
    style={{width: "auto", flexGrow: 1}}
  />
</div>


    <table className='table table-striped'>
        <thead className='bg-primary text-white'>
         <tr>
            <th>Nombres</th>
            <th>Correo</th>
            <th>Telefono</th>
            <th>Direccion</th>
            <th>Ciudad</th>
            <th>Provincia</th>
            <th>País</th>
            <th>Preferencia Propiedad</th>
            <th>Acciones</th> 
         </tr>
        </thead>
        <tbody>
            {Clientes.filter((cliente) => {
      return cliente.nombres.toLowerCase().includes(busqueda.toLowerCase());
    }).map((cliente)=>(
                <tr key={cliente.id}>
                 <td>{cliente.nombres}</td>
                 <td>{cliente.correo}</td>
                 <td>{cliente.telefono}</td>
                 <td>{cliente.direccion}</td>
                 <td>{cliente.ciudad}</td>
                 <td>{cliente.provincia}</td>
                 <td>{cliente.pais}</td>
                 <td>{cliente.preferencia_propiedad}</td>
                 <td>
                 <Link to={`/edit/${cliente.id}`} className='btn btn-warning'>Edit</Link> {/* Corregido para incluir el texto dentro del Link */}
                 <button onClick={()=>deleteClientes(cliente.id)} className='btn btn-danger'>Eliminar</button>
                 </td>
                </tr>
            ))}
         </tbody>
    </table>
</div>

  )

}

export default MostrarClientes
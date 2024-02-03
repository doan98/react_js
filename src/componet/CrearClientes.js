import React, {useState} from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api/cliente'
const CrearClientes = ()=>{
    const[nombres, setNombres]= useState('')
    const[correo, setCorreo]= useState('')
    const[telefono, setTelefono]= useState(0)
    const[direccion, setDireccion]= useState('')
    const[ciudad, setCiudad]= useState('') 
    const[provincia, setProvincia]= useState('')
    const[pais, SetPais]= useState('')
    const[preferencia_propiedad, setPreferencia_propiedad]= useState('')
    const navigate = useNavigate()


    const store = async (e) => {
        e.preventDefault();
    
        if (!nombres.trim() || !correo.trim() || !direccion.trim() || !telefono.trim() || !ciudad.trim() || !provincia.trim() || !pais.trim() || !preferencia_propiedad.trim()) {
            alert('Todos los campos son obligatorios para registrar un cliente');
            return;
        }
    
        // Si todas las validaciones pasan, entonces procede con la lógica para crear el cliente
        try {
            await axios.post(endpoint, { nombres, correo, telefono, direccion, ciudad, provincia, pais, preferencia_propiedad });
            navigate('/');
        } catch (error) {
            console.error("Error al crear el cliente:", error.response ? error.response.data : error.message);
        }
    }
    

      return(
        <div>
    <h3>CREAR CLIENTES</h3>
    <form onSubmit={store}>
        <div className='mb-3'>
            <label className='form-label'>Nombres</label>
            <input 
            value={nombres}
            onChange={(e) => {
                // Expresión regular que permite solo letras y espacios
                const regex = /^[A-Za-z ]*$/;
                if (regex.test(e.target.value)) {
                  setNombres(e.target.value);
                }
              }}
            type='text'
            className='form-control'
            
            />
        </div>

        

        <div className='mb-3'>
            <label className='form-label'>Correo</label>
            <input 
            value={correo}
            onChange={(e)=>setCorreo(e.target.value)}
            type='text'
            className='form-control'
            />
        </div>

        <div className='mb-3'>
            <label className='form-label'>Dirección</label>
            <input 
            value={direccion}
            onChange={(e) => {
                // Expresión regular que permite letras, números y espacios
                const regex = /^[A-Za-z0-9 ]*$/;
                if (regex.test(e.target.value)) {
                  setDireccion(e.target.value);
                }
              }}
            
            type='text'
            className='form-control'
            />
        </div>

        <div className='mb-3'>
            <label className='form-label'>Telefono</label>
            <input 
            value={telefono}
            onChange={(e) => {
                // Expresión regular que permite solo números
                const regex = /^[0-9]*$/;
                if (regex.test(e.target.value)) {
                  setTelefono(e.target.value);
                }
              }}
              
            type='text'
            className='form-control'
            maxlength="15"
            />
        </div>

        <div className='mb-3'>
            <label className='form-label'>Ciudad</label>
            <input 
            value={ciudad}
            onChange={(e) => {
                // Expresión regular que permite solo letras y espacios
                const regex = /^[A-Za-z ]*$/;
                if (regex.test(e.target.value)) {
                  setCiudad(e.target.value);
                }
              }}
            type='text'
            className='form-control'
            />
        </div>

        <div className='mb-3'>
            <label className='form-label'>Provincia</label>
            <input 
            value={provincia}
            onChange={(e) => {
                // Expresión regular que permite solo letras y espacios
                const regex = /^[A-Za-z ]*$/;
                if (regex.test(e.target.value)) {
                  setProvincia(e.target.value);
                }
              }}
            type='text'
            className='form-control'
            />
        </div>

        <div className='mb-3'>
            <label className='form-label'>País</label>
            <input 
            value={pais}
            onChange={(e) => {
                // Expresión regular que permite solo letras y espacios
                const regex = /^[A-Za-z ]*$/;
                if (regex.test(e.target.value)) {
                  SetPais(e.target.value);
                }
              }}
            type='text'
            className='form-control'
            />
        </div>

        <div className='mb-3'>
            <label className='form-label'>Preferencia Propiedad</label>
            <input 
            value={preferencia_propiedad}
            onChange={(e) => {
                // Expresión regular que permite solo letras y espacios
                const regex = /^[A-Za-z ]*$/;
                if (regex.test(e.target.value)) {
                  setPreferencia_propiedad(e.target.value);
                }
              }}
            type='text'
            className='form-control'
            />
        </div>
        <button type='submit' className='btn btn-primary'>Crear</button>
    </form>
</div>

)

   
}

  

export default CrearClientes
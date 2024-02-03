import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const endpoint = 'http://127.0.0.1:8000/api/cliente/'

const EditarClientes=()=> {
    const[nombres, setNombres]= useState('')
    const[correo, setCorreo]= useState('')
    const[telefono, setTelefono]= useState(0)
    const[direccion, setDireccion]= useState('')
    const[ciudad, setCiudad]= useState('') 
    const[provincia, setProvincia]= useState('')
    const[pais, SetPais]= useState('')
    const[preferencia_propiedad, setPreferencia_propiedad]= useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e)=>{
        e.preventDefault()
         await axios.put(`${endpoint}${id}`, {
            nombres: nombres, 
            correo:correo, 
            telefono:telefono, 
            direccion:direccion, 
            ciudad:ciudad, 
            provincia:provincia, 
            pais:pais, 
            preferencia_propiedad:preferencia_propiedad
            
         })
         navigate('/')
    }

    useEffect ( ()=>{
        const getClienteById = async ()=>{
         const response = await axios.get(`${endpoint}${id}`)
        setNombres(response.data.nombres)
        setCorreo(response.data.correo)
        setDireccion(response.data.direccion)
        setTelefono(response.data.telefono)
        setCiudad(response.data.ciudad)
        setProvincia(response.data.provincia)
        SetPais(response.data.pais)
        setPreferencia_propiedad(response.data.preferencia_propiedad)
        }
        getClienteById()
     }, [])

  return (
    <div>
    <h3>EDITAR CLIENTES</h3>
    <form onSubmit={update}>
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
        <button type='submit' className='btn btn-primary'>Editar</button>
    </form>
</div>
  )

}

export default EditarClientes
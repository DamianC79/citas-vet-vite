import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const { nombre, propietario, contacto, alta, sintomas, id } = paciente;


  return (
    <div className="m-3 bg-indigo-100 shadow-md px-5 py-10">
        <p className="font-bold mb-3 text-grey-700 uppercase">Nombre Mascota: {''}
          <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-grey-700 uppercase">Nombre Dueño: {''}
          <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-grey-700 uppercase">Email: {''}
          <span className="font-normal normal-case">{contacto}</span>
        </p>
        <p className="font-bold mb-3 text-grey-700 uppercase">Fecha de alta: {''}
          <span className="font-normal normal-case">{alta}</span>
        </p>
        <p className="font-bold mb-3 text-grey-700 uppercase">Síntomas: {''}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div >
          <button 
            className="py-2 m-3 px-5 bg-indigo-400 text-white uppercase hover:bg-indigo-600"
            type="button"
            onClick={ ()=> setPaciente(paciente) }>Editar</button>
        
          <button 
            className="py-2 m-3 px-5 bg-red-800 text-white uppercase hover:bg-red-700"
            type="button"
            onClick={ () => eliminarPaciente(id) }
            >Eliminar</button>
        </div>

      </div>
  )
}

export default Paciente
import {useState, useEffect} from 'react'
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [contacto, setContacto] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');
  
  const [error, setError] = useState(false)
  
  useEffect( () => {
    if( Object.keys(paciente).length > 0 ){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)+
      setContacto(paciente.contacto)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if( [nombre, propietario, contacto, alta, sintomas].includes('') ){

      setError(true)
      return;
    }else{
      setError(false)
    }

    const objetoPaciente = {
      nombre,
      propietario,
      contacto,
      alta,
      sintomas
    }

    if ( paciente.id ) {
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

      setPacientes(pacientesActualizados)
      setPaciente({})

    } else {
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
      
    }


    setNombre('')
    setPropietario('')
    setContacto('')
    setAlta('')
    setSintomas('')
  }
  return (
    <div className="md:w-1/2 lg:w-2/5 px-3">
      <h2 className="font-black text-center text-3xl">Formulario</h2>
      
      <p className="mt-5 mb-10 text-center text-xl">Añade Pacientes y {' '}
        <span className="text-indigo-400 font-bold">Adminístralos</span>
      </p>
   
      <form 
        onSubmit={handleSubmit}
        className="bg-indigo-100 shadow-md rounded-md py-10 px-5 mb-5">
          { error && <Error mensaje="Todos los campos son obligatorios"/> }
        <div>
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre de la Mascota</label>
          <input
            id="mascota"
            className="border-2 w-full p-2 mt-2"
            type="text"
            value={nombre}
            onChange= { (e) => setNombre(e.target.value)}
          />
          <label htmlFor="dueño" className="block text-gray-700 uppercase font-bold mt-2">Dueño de la Mascota</label>
          <input
            id="dueño"
            className="border-2 w-full p-2 mt-2"
            type="text"
            value={propietario}
            onChange= { (e) => setPropietario(e.target.value)}
          />
          <label htmlFor="Email" className="block text-gray-700 uppercase font-bold mt-2">Email de Contacto</label>
          <input
            id="Email"
            className="border-2 w-full p-2 mt-2"
            type="email"
            value={contacto}
            onChange={ (e) => setContacto(e.target.value)}
          />
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold mt-2">Alta de la Mascota</label>
          <input
            id="alta"
            className="border-2 w-full p-2 mt-2"
            type="date"
            value={alta}
            onChange={(e)=>setAlta(e.target.value)}
          />
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold mt-2">Síntomas</label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2"
            type="text"
            value={sintomas}
            placeholder="Describe los síntomas de tu mascota"
            onChange={(e)=>setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-400 w-full p-2 font-bold text-white uppercase hover:bg-indigo-600 cursor-pointer"
          value={paciente.id ? "Editar paciente" : "Añadir paciente"}
        />
      </form>

    </div>
  )
}

export default Formulario
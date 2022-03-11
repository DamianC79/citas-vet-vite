
import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 ">
      { pacientes && pacientes.length ? (
        <>
            <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">Administra a tus {' '}
            <span className="text-indigo-400 font-bold">Pacientes y Citas</span>
          </p>
          <div className=" md:h-screen overflow-y-scroll px-3">
            { pacientes.map( (paciente) => (
                <Paciente
                  key={paciente.id} 
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
            ))}
          </div>
        </>)
       : (
        <>
          <h2 className="font-black text-3xl text-center">Sin Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">Agrega {' '}
            <span className="text-indigo-400 font-bold">Pacientes y Citas</span>
          </p>
        </>) }
      
    </div>
  )
}

export default ListadoPacientes
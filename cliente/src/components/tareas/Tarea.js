import React, {useContext} from 'react';
import tareaContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Tarea = ({tarea}) => {

     // extraer si un proyecto esta activo
     const proyectosContext = useContext(proyectoContext);
     const {proyecto} = proyectosContext;
  
    //obtener el state de tareas 
    const tareasContext = useContext(tareaContext);
    const {eliminarTarea, obtenerTareas, cambiaEstadoTarea, guardarTareaActual} = tareasContext;

    // extraer el proyecto actual 
    const [proyectoActual] = proyecto;


    // funcion que se ejecuta cuando se oprime el boton de eliminar tarea
    const tareaEliminar = id =>{
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id);
    }

    // cambia esado de una tarea 
    const cambiaEstado = tarea =>{
        if(tarea.estado){
            tarea.estado=false;
        }else{
            tarea.estado=true;
        }
        cambiaEstadoTarea(tarea);
    }
    
    // agrega una tarea actual cuan el usuario desea editarla 
    const seleccionarTarea = tarea =>{
        guardarTareaActual(tarea);
    }
    return (


        <li className="tarea sombra">
            <p>{tarea.nombre}</p>

            <div className="estado">
                {tarea.estado 
                ?
                (
                    <button
                        type="button"
                        className="completo"
                        onClick= {()=>cambiaEstado(tarea)}
                    >Completo</button>
                ) 
                
                :
                (
                    <button
                        type="button"
                        className="incompleto"
                        onClick= {()=>cambiaEstado(tarea)}
                    >Incompleto</button>
                )
                }
            </div>

            <div className="acciones">
                <button
                type="button"
                className="btn btn-primario"
                onClick={()=>seleccionarTarea(tarea)}
                >Editar</button> 
                <button
                type="button"
                className="btn btn-secundario"
                onClick= {()=>tareaEliminar(tarea.id)}
                >Eliminar</button>   
            </div>
        </li>
    );
}
 
export default Tarea;
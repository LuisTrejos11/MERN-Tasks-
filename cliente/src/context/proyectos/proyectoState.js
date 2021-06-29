import React, {useReducer} from 'react';
import uuid, { v4 as uuidv4 } from 'uuid';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import{ FORMULARIO_PROYECTO, 
        OBTENER_PROYECTOS, 
        AGREGAR_PROYECTO,
        VALIDAR_FORMULARIO,
        PROYECTO_ACTUAL,
        ELIMINAR_PROYECTO
    } from '../../types';




const ProyectoState = props =>{

    const proyectos = [  
        {id:1, nombre: 'Tienda virtual'},
        {id: 2, nombre: 'Intranet'},
        {id:3, nombre: 'Diseño de sitio web'}];

    const initialState = {
        proyectos :[],
        formulario : false,
        errorformulario: false,
        proyecto: null
    }

    // dispatch para ejecutar las acciones 
     const [state, dispatch] = useReducer(proyectoReducer, initialState)

     // serie de funciones para el crud 
     const mostrarFormulario = ()=>{
         dispatch({
             type : FORMULARIO_PROYECTO
         })
     }

     // obtener proyecto 
     const obtenerProyectos = ()=>{
         dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
         })
     }

     // agregar proyectos 
     const agregarProyecto = proyecto=>{
        proyecto.id = uuidv4();

        // Agregar el proyecto al state
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
         })

     }

     // validar formulario por errores 
     const mostrarError = ()=>{
         dispatch({
             type: VALIDAR_FORMULARIO
          
         })
     }

     // selecciona el preoyecto al que el usuario da click
     const proyectoActual = proyectoId =>{
         dispatch({
             type: PROYECTO_ACTUAL,
             payload: proyectoId
         })
     }
     
     // elimina un proyecto
     const eliminarProyecto = proyectoId =>{
         dispatch({
             type: ELIMINAR_PROYECTO,
             payload: proyectoId
         })
     }
     return(
         <proyectoContext.Provider
            value = {{
                proyectos : state.proyectos,
                formulario : state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError, 
                proyectoActual,
                eliminarProyecto
            }}
         >
             {props.children}
         </proyectoContext.Provider>
     );
}

export default ProyectoState;
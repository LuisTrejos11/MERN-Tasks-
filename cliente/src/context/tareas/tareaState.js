import React, {useReducer} from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import uuid, { v4 as uuidv4 } from 'uuid';

import {TAREAS_PROYECTO,
AGREGAR_TAREA,
VALIDAR_TAREA,
ELIMINAR_TAREA,
ESTADO_TAREA,
TAREA_ACTUAL,
ACTUALIZAR_TAREA,
LIMPIAR_TAREA
} from '../../types';


const TareaState = props =>{

    const initialState = {
        tareas : [
            {id: 1, nombre : 'elegir plataforma', estado : true, proyectoId: 1},
            {id:2, nombre : 'elegir colores', estado : false, proyectoId: 2},
            {id: 3, nombre : 'elegir pago', estado : false, proyectoId: 3},
            {id: 4, nombre : 'elegir hosting', estado : true, proyectoId: 4},
            {id: 5, nombre : 'elegir plataforma', estado : true, proyectoId: 3},
            {id: 6, nombre : 'elegir colores', estado : false, proyectoId: 4},
            {id: 7, nombre : 'elegir pago', estado : false, proyectoId: 2},
            {id: 8, nombre : 'elegir hosting', estado : true, proyectoId: 1},
            {id: 9, nombre : 'elegir plataforma', estado : true, proyectoId: 4},
            {id: 10, nombre : 'elegir colores', estado : false, proyectoId: 1},
            {id: 11, nombre : 'elegir pago', estado : false, proyectoId: 3},
            {id: 12, nombre : 'elegir hosting', estado : true, proyectoId: 2},
        ],
        tareasproyecto : null, 
        errortarea: false, 
        tareaseleccionada : null

    }

    // crear dispatch y state 
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    //CREAR LAS FUNCIONES 

    //obtener las tareas de un proyecto
    const obtenerTareas = proyectoId =>{
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    // agregar una tarea al proyecto selccionado 
    const agregarTarea = tarea =>{
        tarea.id = uuidv4();
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    // valida y muestra error en caso de ser necesario 
    const validarTarea = () =>{
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    // Elimina tarea segun proyecto
    const eliminarTarea = id =>{
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    // cambia el estado de una tarea
    const cambiaEstadoTarea= tarea=>{
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    // extrae una tarea para edicion 
    const guardarTareaActual = tarea =>{
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    // edita una tarea 
    const actualizarTarea = tarea =>{
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    // elimina la tarea seleccionada 
    const limpiarTarea = ()=>{
        dispatch({
            type: LIMPIAR_TAREA,

        })
    }

    return(
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto : state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea, 
                validarTarea,
                eliminarTarea, 
                cambiaEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;
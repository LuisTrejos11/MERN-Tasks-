import React, {useContext, useEffect} from 'react';

import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext';

import {CSSTransition, TransitionGroup} from 'react-transition-group'

const ListadoProyectos = () => {

     // obtener el state de proyectos
     const proyectosContext = useContext(proyectoContext);
     const {proyectos, obtenerProyectos} = proyectosContext;

     //obtener proyectos cuando carga el componente
     useEffect(() => {
        obtenerProyectos();
        // eslint-disable-next-line
     }, [])

     // revisar si proyectos tienen contenidos 
     if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

    

    return ( 
        <ul className="listado-proyectos">
          <TransitionGroup>
            {proyectos.map(proyecto =>(
                   <CSSTransition
                   key= {proyecto.id}
                   timeout={200}
                   classNames="proyecto"
                   >
                        <Proyecto
                        proyecto = {proyecto}
                    />
                   </CSSTransition>
                ))}
          </TransitionGroup>
        </ul>
     );
}
 
export default ListadoProyectos;
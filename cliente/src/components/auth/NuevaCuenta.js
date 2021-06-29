import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const NuevaCuenta = () => {

    // state para iniciar sesion 
    const[usuario, guardarUsuario] = useState({
        nombre : '',
        email : '',
        password : '', 
        confirmar : ''
    });
    // extraer de usuario 
    const {nombre, email, password, confirmar} = usuario;

    const onChange = (e)=>{
        guardarUsuario({
           ...usuario,
           [e.target.name]: e.target.value 
        })
    }

    // cuando el usuario quiere iniciar sesion 
    const onSubmit = e =>{
        e.preventDefault();


        // validar que no hayan campos vacios 

        // password minimo 6 caracteres

        // password sean iguales 

        // pasarlo al action
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>
                <form
                    onSubmit = {onSubmit}
                >
                    <div className="campo-form">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        id="nombre"
                        type="nombre"
                        name="nombre"
                        placeholder="Tu Nombre"
                        value= {nombre}
                        onChange={onChange}
                    />
                    </div>
                    <div className="campo-form">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value= {email}
                        onChange={onChange}
                    />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder= "Tu Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input
                            id="confirmar"
                            type="confirmar"
                            name="confirmar"
                            placeholder= "Confirma tu password"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block " value="Registrarme"/>
                    </div>
                </form>
                <Link to = {'/'} className="enlace-cuenta">Volver a Iniciar Sesión</Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;
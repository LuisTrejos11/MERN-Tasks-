import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Login = () => {

    // state para iniciar sesion 
    const[usuario, guardarUsuario] = useState({
        email : '',
        password : ''
    });
    // extraer de usuario 
    const {email, password} = usuario;

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


        // pasarlo al action
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>
                <form
                    onSubmit = {onSubmit}
                >
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
                        <input type="submit" className="btn btn-primario btn-block " value="Iniciar Sesión"/>
                    </div>
                </form>
                <Link to = {'/nueva-cuenta'} className="enlace-cuenta">Obtener Cuenta</Link>
            </div>
        </div>
     );
}
 
export default Login;
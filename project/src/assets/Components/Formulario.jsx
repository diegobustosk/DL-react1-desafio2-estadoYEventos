import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import AlertComponent from "./Alert";



const Formulario = () =>{
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error , setError] = useState(false)
    const [success, setSuccess] = useState(false);

    const validationSubmit = (e) => {
        e.preventDefault()
        
        if (nombre === '' || email === '' || password === '' || confirmPassword === ''  ) {
            console.log('All fields are Required')
            setError('All fields are Required');
            setSuccess(false);
            return
        }
        
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
        console.log('Invalid email format');
        setError('Invalid email format');
        setSuccess(false);
        return;
        }

        if (password !== confirmPassword) {
            console.log('Your Passwords dosnt match')
            setError('Your Passwords dosnt match');
            setSuccess(false);
            return
        }

        setError(false);
        setNombre('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setSuccess(true);

    }

    return(
        <>
        <form className="formulario" onSubmit={validationSubmit}>
            <div className="nnombre">
            <input
            type="text"
            name="nombre"
            placeholder="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />

            </div>
            <div className="eemail">
            <input
            type="email"
            name="email"
            placeholder="tuemail@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            </div>

            <div className="ppassword">
            <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            </div>

            <div className="confirma">
            <input
            type="password"
            name="password"
            placeholder="Confirma tu Contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            />
            </div>

            <div>
             <Button className="boton" variant="success" type="submit">Registrarse</Button>{' '}
            </div>

            {error ? <AlertComponent error={error} /> : null }
            {success ? <AlertComponent success={true} /> : null}
        </form>

        </>
    );
};

export default Formulario;
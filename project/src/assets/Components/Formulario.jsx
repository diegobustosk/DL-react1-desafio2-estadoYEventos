import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';



const Formulario = () =>{
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const validationSubmit = (e) => {
        e.preventDefault()
        
        if (nombre === '' || email === '' || password === '' || confirmPassword === ''  ) {
            console.log('All fields are Required')
            return
        }
        
        if (password !== confirmPassword) {
            console.log('Your Passwords dosnt match')
            return
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
        console.log('Invalid email format');
        return;
        }
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
        </form>

        </>
    );
};

export default Formulario;
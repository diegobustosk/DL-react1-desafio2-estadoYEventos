import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import Alert from "./Alert";


const register = () => {
    return(
        <>
        <div className="principal">
        <h3>Crea una Cuenta</h3>
        <div className="social">
        <div className="face">
        <SocialButton icon="fa-brands fa-facebook" />
        </div>

        <div className="git">
        <SocialButton icon="fa-brands fa-github" />
        </div>

        <div className="link">
        <SocialButton icon="fa-brands fa-linkedin" />
        </div>
        </div>

        <h6>O usa tu email para registrarte</h6>
        <Formulario />
        </div>

        </>
    );
};

export default register;
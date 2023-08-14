import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
const AlertComponent = ({error, success}) =>{
    let variant = success ? 'success' : 'danger'
    
    return(
        <>
        <Alert className="alert py-2 my-2 " variant={variant} key={variant}> 
            {success ? 'Submitted Successfully' : error}
        </Alert>
        </>
    );
};

export default AlertComponent;
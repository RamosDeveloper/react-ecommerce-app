import { useNavigate } from 'react-router';

import axios from 'axios';
import Swal from 'sweetalert2';

import useFormulario from '../hooks/useFormulario';

const Login = () => {
    const [formulario, handleChange, reset] = useFormulario({ Email: '', Password: '' });
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(formulario.Email != "" && formulario.Password != "") {
            logMeIn(formulario);            
        }else {
            Swal.fire({
                icon: 'error',
                title: 'Important!',
                text: 'You an email and password to be able to Log In'
            });
        }        
    }

    const logMeIn = async (formulario) => {     
        try {
            const res = await axios.post(`https://ecommerce-exercise-backend.herokuapp.com/login/`,{
                email: formulario.Email,
                password: formulario.Password
            }); 
            
            sessionStorage.setItem('react-ecommerce-token',res.data.access);

            navigate("/shop");
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Access Denied',
                text: 'No account exists with those credentials'
            });            
        }            
    }

    return (
        <div className='container min-vh-100 d-flex justify-content-center align-items-center'>
            <div className="card">
                <div className="card-header">
                    <h1>React Ecommerce Login</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="Email" name="Email" value={formulario.Email} onChange={handleChange}/>
                        </div>  
                        <div className="mb-3">
                            <label htmlFor="Password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="Password" name="Password" value={formulario.Password} onChange={handleChange}/>
                        </div>   
                        <div className="md-3">
                            <button type="submit" className="btn btn-warning">Log In</button>
                        </div>                                                                   
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
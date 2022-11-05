import './style.css';
import { Link } from 'react-router-dom';
import Signup from './Signup';

const Login = () => {
    return (
        <div id='login' class='container'>
            <div class='form'>
                <div id='judul' class='btn'>
                    <Link to='/Signup' class='signUpBtn'>Sign Up</Link>
                    <Link to='/' class='loginBtn'>Log In</Link>
                </div>
                <form class='ls' />
                <div class='formGroup'>
                    <span class='kt1'>Log In</span>
                </div>
                <div class='formGroup form-floating'>
                    <input type='email' placeholder='Email' name='email' required autocomplete='off' />
                </div>
                <div class='formGroup'>
                    <input type='password' id='password' placeholder='Password' required autocomplete='off' />
                </div>
                <div class='checkbox'>
                    <input type='checkbox' name='checkbox' id='checkbox' />
                    <span class='text'>Keep me signed in on this device</span>
                </div>
                <div class='formGroup'>
                    <button type='button' class='btn2'>Log In</button>
                </div>
            </div>
        </div>
    )
}

export default Login;
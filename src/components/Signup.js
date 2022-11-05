import './style.css';
import { Link } from 'react-router-dom';
import Login from './Login';

const Signup = () => {
    return (
        <div id='signup' class='container'>
            <div class='form'>
                <div id='judul' class='btn'>
                    <Link to='Signup' class='signUpBtn'>Sign Up</Link>
                    <Link to='/' class='loginBtn'>Log In</Link>
                </div>
                <form class='ls' />
                <div class='formGroup'>
                    <span class='kt1'>Sign Up</span>
                </div>
                <form class='ls' />
                <div class='formGroup'>
                    <input type='text' id='username' placeholder='Username' autoComplete='off' />
                </div>
                <div class='formGroup'>
                    <input type='email' placeholder='Email Address' name='email' required autoComplete='off' />
                </div>
                <div class='formGroup'>
                    <input type='password' id='password' placeholder='Password' required autoComplete='off' />
                </div>
                <div class='formGroup'>
                    <input type='password' id='confirmPassword' placeholder='Confirm Password' required autoComplete='off' />
                </div>
                <div class='checkbox'>
                    <input type='checkbox' name='checkbox' id='checkbox' />
                    <span class='text'>I agree with term & conditions</span>
                </div>
                <div class='formGroup'>
                    <button type='button' class='btn2'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Signup;
import React, { useState } from 'react';
import Axios from 'axios';
import '../../components/Forms/Form.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    const [email, setEmail] = useState('');
    const getDate = () => {
        let date = new Date().getTime();
        return date;
    }
    console.log(getDate());
    const Submit = (e) => {
        e.preventDefault();
        if(password === repassword) {
            Axios.post('http://localhost:3001/user/sign-up', {
                username,
                password,
                email,
            }).then((response) => {
                console.log(response);
            });
        }
    };
    return (
        <React.Fragment>
            <div className='bg-form-signup'>
                <div className='form-group'>
                    <form>
                        <h1 className='form-logo'>Sign Up<i className='fa fa-gamepad'></i></h1>
                        <p className='form-text'>Start your adventures with us!</p>
                        <hr />
                        <input 
                            className='input-control' 
                            type='text' 
                            name='username' 
                            minLength='5' 
                            maxLength='32'
                            placeholder='Account name'
                            spellCheck='false'
                            onChange={(e) => {setUsername(e.target.value);}}
                            required
                        />
                        <input 
                            className='input-control' 
                            type='password' 
                            name='password' 
                            minLength='4' 
                            maxLength='16'
                            placeholder='Password'
                            spellCheck='false'
                            onChange={(e) => {setPassword(e.target.value);}}
                            required
                        />
                        <input 
                            className='input-control' 
                            type='password' 
                            name='repassword' 
                            minLength='4' 
                            maxLength='16'
                            placeholder='Password again'
                            spellCheck='false'
                            onChange={(e) => {setRePassword(e.target.value);}}
                            required
                        />
                        <input 
                            className='input-control' 
                            type='email' 
                            name='email' 
                            placeholder='Email address'
                            spellCheck='false'
                            pattern="/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/"
                            onChange={(e) => {setEmail(e.target.value);}}
                            required
                        />
                        <button className='button-submit controls-buttons' type='submit' onClick={Submit}>Sign Up</button>
                    </form>
                    <a className='button-sign-up controls-buttons' href='/login/'>Already have an account?</a>
                    <p className='form-subtitle'>By clicking on Sign up, <br />I agree to the <a href='/terms-of-service/'>Short Grind Terms of Service</a>.</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Signup;

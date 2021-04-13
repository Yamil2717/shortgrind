import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../../components/Forms/Form.css';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [ErrorMessage, setErrorMessage] = useState('');
    let history = useHistory();
    const Submit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3001/user/login', {
            /*auth: {
                hashx: JSON.stringify({username}),
                hashz: JSON.stringify({password})
            }*/
            username,
            password
        }).then((response) => {
            let data = response.data;
            console.log(data);
            if(data.loggedIn) {
                props.setLoggedIn(true);
                localStorage.setItem('loggedIn', true);
                localStorage.setItem('username', data.username);    
                history.push('/');
            } else {
                setErrorMessage(response.data.message);
            }
        })
    }
    return(
        <React.Fragment>
            <div className='bg-form-login'>
                <div className='form-group'>
                    <form>
                        <h1 className='form-logo'>Log in<i className='fa fa-gamepad'></i></h1>
                        <p className='form-text'>Check your account, buy items and enjoy!</p>
                        <hr />
                        <input 
                            className='input-control' 
                            type='text' 
                            name='username' 
                            minLength='5' 
                            maxLength='32'
                            spellCheck='false'
                            placeholder='Account name'
                            onChange={(e) => {setUsername(e.target.value);}}
                            required
                        />
                        <input 
                            className='input-control' 
                            type='password' 
                            name='password' 
                            minLength='4' 
                            maxLength='16'
                            spellCheck='false'
                            placeholder='Password'
                            onChange={(e) => {setPassword(e.target.value);}}
                            required
                        />
                        {ErrorMessage && <p className="errors">{ErrorMessage}</p>}
                        <button className='button-submit controls-buttons' type='submit' onClick={Submit}>Log in</button>
                    </form>
                    <a className='button-login controls-buttons' href='/sign-up'>Create a account</a>
                    <p className='form-subtitle'>By clicking on Log in, <br />I agree to the <a href='/terms-of-service/'>Short Grind Terms of Service</a>.</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Login;
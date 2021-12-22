import React from 'react'
import { useNavigate } from 'react-router-dom';

import { StyledLoginDiv } from './login-styles';
import { Button, Input } from '../../components'

const Login = () => {

    let navigate = useNavigate();

    const userNameRef = React.useRef(null);
    const passwordRef = React.useRef(null);

    const validateAuth = (username, password) => {
        if(username === 'admin' && password === 'admin') return true;
        return false;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = userNameRef.current.value;
        const password = passwordRef.current.value;

        if (validateAuth(username, password)) navigate('/dashboards/1')
    }

    return (
        <StyledLoginDiv>
            <form onSubmit={handleSubmit}>
                <div className='center-div'>
                    <Input 
                        label='Nome de usuário:'
                        fieldRef={userNameRef}
                    />
                    <Input 
                        label='Senha:'
                        fieldRef={passwordRef}
                        type='password'
                    />
                    
                    <Button type='submit'>Login</Button>
                </div>
            </form>
        </StyledLoginDiv>
    )
}

export default Login;
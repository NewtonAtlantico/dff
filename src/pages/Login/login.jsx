import React from 'react'

import {Button, Input} from '../../components'

const Login = () => {
    return (
        <div>
            <Input label='Nome de usuário'/>
            <Input label='Senha'/>
            <Button>Login</Button>
        </div>
    )
}

export default Login;
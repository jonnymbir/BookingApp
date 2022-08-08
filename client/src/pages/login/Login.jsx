import React, { useContext, useState } from 'react'
import "./login.css"
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
    const [ credentials, setCredentials ] = useState({
        username: undefined,
        password: undefined
    });

const { loading, error, dispatch } = useContext(AuthContext)

  return (
    <div>Login</div>
  )
}

export default Login
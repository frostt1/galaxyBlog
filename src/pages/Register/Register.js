import { useState, useEffect } from 'react'
import styles from './Register.module.css'

import {useAuthentication} from '../../hooks/useAuthentication'

const Register = () => {

    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const { createUser, error: authError, loading } = useAuthentication();

    //submit
    const handleSubmit = async (e) => {
        e.preventDefault()

        setError('')

        const user = {
            displayName,
            email,
            password
        }

        if (password !== confirmPassword) {
            setError('As senhas precisam ser iguais')
        }

        const res = await createUser(user);

        console.log(res)
    }

        useEffect(() => {

            if(authError) {
                setError(authError)
            }

        }, [authError])

    
    // states
    const handleDisplayName = (e) => {
        setDisplayName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleConfirmedPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    console.log(displayName, email, password, confirmPassword);

    return (
        <div className={styles.container}>
            <h1>Cadastre-se para postar</h1>
            <p>Crie seu usuário e compartilhe suas histórias!</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input
                        type="text"
                        name='displayname'
                        required placeholder='Nome do usuário'
                        onChange={handleDisplayName} />
                </label>
                <label>
                    <span>E-mail:</span>
                    <input
                        type="email"
                        name='email'
                        required
                        placeholder='E-mail do usuário'
                        onChange={handleEmail} />
                </label>
                <label>
                    <span>Senha:</span>
                    <input
                        type="password"
                        name='password'
                        required
                        placeholder='Digite sua senha'
                        onChange={handlePassword} />
                </label>
                <label>
                    <span>Confirmação de senha:</span>
                    <input
                        type="password"
                        name='confirmPassword'
                        required
                        placeholder='Confirme a sua senha'
                        onChange={handleConfirmedPassword} />
                </label>
                {!loading && <input className='btn' type="submit" value="Cadastrar" />}
                {loading && <input className='btn' type="submit"  disabled value="Aguarde..." /> }
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    )
}

export default Register
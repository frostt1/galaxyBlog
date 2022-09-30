import React from 'react'
import styles from '../Header/Header.module.css'
import {NavLink, Link} from 'react-router-dom'

import { useAuthentication } from '../../hooks/useAuthentication'
import { useAuthValue } from '../../context/AuthContext'

const Header = () => {
  const { user } = useAuthValue()

  
  const {logout} = useAuthentication()

  return (
    <nav className={styles.container_bg}>

    <NavLink to='/' className={styles.brand}>
     Galaxy<span>Blog</span>
    </NavLink>
    <ul className={styles.container_item}>
      <li><NavLink to='/'>Home</NavLink></li>
        {!user &&
        <>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Cadastro</NavLink></li>
        </>}
        {user &&
        <>
        <li><NavLink to='/posts/create'>Novo Post</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        </>}
        <li><NavLink to='/about'>Sobre</NavLink></li>
        {user && (
          <li>
            <Link to="/login" className={styles.btn_logout} onClick={logout}>logout</Link>
          </li>
        )}

    </ul>

    </nav>
  )
}

export default Header
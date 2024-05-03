'use client'

import { useState } from "react";
import Link from 'next/link';

import styles from './page.module.css'

const initialValues = {
    user: '',
    password: ''
}

const Form = () => {

    const [user, setUser] = useState(initialValues)
    const [login, setLogin] = useState(true)

    const catchInputs = (e) => {
        const { name, value } = e.target;
        const newValues = ({ ...user, [name]: value });
        setUser(newValues)
    }

    const logIn = (e) => {
        e.preventDefault();
        console.log(user)
        setUser(initialValues)
    }

    return (
        <section className={styles.container}>
                    <form className={styles.form_container}
                        onSubmit={logIn}>
                        <input
                            placeholder="Nombre de usuario o email"
                            type="text"
                            name="user"
                            onChange={catchInputs} />
                        <input
                            placeholder="Contraseña"
                            type="password"
                            name="password"
                            onChange={catchInputs} />
                        <button>Login</button>
                        <span>No tienes una cuenta? <Link href="/signup">Sign Up</Link></span>
                    </form>
        </section>
    )
}

export default Form;
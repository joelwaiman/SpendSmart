'use client'

import { useState } from "react";
import Link from 'next/link'

import styles from './page.module.css'

const initialValues = {
    name: '',
    lastname: '',
    email: '',
    phone: '',
    password: ''
}

const SignUp = () => {

    const [user, setUser] = useState(initialValues);

    const catchInputs = (e) => {
        const { name, value } = e.target;
        const newValues = ({ ...user, [name]: value });
        setUser(newValues)
    }

    const signUp = (e) => {
        e.preventDefault();
        console.log(user)
        setUser(initialValues)
    }

    return (
        <section className={styles.container}>
            <form className={styles.form_container}
                onSubmit={signUp}>
                <input
                    placeholder="Nombre de usuario"
                    type="text"
                    name="name"
                    onChange={catchInputs} />
                <input
                    placeholder="Apellido"
                    type="text"
                    name="lastname"
                    onChange={catchInputs} />
                <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={catchInputs} />
                    <input
                    placeholder="Telefono"
                    type="text"
                    name="phone"
                    onChange={catchInputs} />
                <input
                    placeholder="Contraseña"
                    type="password"
                    name="password"
                    onChange={catchInputs} />
                <button>Sign up</button>
                <span>Ya tienes una cuenta? <Link href="/login">LogIn</Link></span>
            </form>
        </section>

    )
}

export default SignUp;
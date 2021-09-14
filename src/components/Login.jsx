import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';


export default function Login() {
    const [] = useState()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Traitement exécuté à la soumission des données', data)
    };

    return (
        <div id="login">
            <h1>LOGIN</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="description"
                    {...register('name', { required: "Invalid name, please try again", maxLength: 15 })}
                    placeholder="Name..."
                />
                <input
                    type="password"
                    name="description"
                    {...register('password', { required: "Invalid password, please try again", minLength: 6 })}
                    placeholder="Password..."
                />
                <p>{errors.name && errors.name.message}</p>
                <p>{errors.password && errors.password.message}</p>
                <button className="btn btn-primary" type="submit">Login</button>
            </form>
        </div>
    )
}

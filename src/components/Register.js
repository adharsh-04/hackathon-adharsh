import React from 'react';
import { useForm } from 'react-hook-form';
import { Link,useNavigate } from 'react-router-dom';
import {hashSync} from 'bcryptjs'

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate= useNavigate();
    const handleFormSubmit = (data) => {
        let hashedpassword=hashSync(data.password);
        data.password=hashedpassword;
        fetch('http://localhost:4000/posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.status===201) {
                navigate('/login')
                // You can navigate to another page or do something else on success
            } else {
                console.error("Failed to add data");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    };

    return (
        <div className='container'>
            <h2 className='text-center text-secondary mt-4'>Registration Form</h2>
            <form className='d-block mx-auto w-50' onSubmit={handleSubmit(handleFormSubmit)}>
                <div className='m-3'>
                    <label className='form-label' htmlFor='username'>Username</label>
                    <input type='text' className='form-control' name='username' placeholder='Enter Username' {...register('username', { required: true })} />
                    {errors.username && <p className='text-danger'>Please Enter username</p>}
                </div>
                <div className='m-3'>
                    <label className='form-label' htmlFor='email'>Email</label>
                    <input type='email' className='form-control' name='email' placeholder='Enter Email' {...register('email', { required: true })} />
                    {errors.email && <p className='text-danger'>Please Enter Email</p>}
                </div>
                <div className='m-3'>
                    <label className='form-label' htmlFor='password'>Password</label>
                    <input type='password' className='form-control' name='password' placeholder='Enter Password' {...register('password', { required: true })} />
                    {errors.password && <p className='text-danger'>Please Enter Password</p>}
                </div>
                <button type="submit" className='btn btn-success d-block mx-auto'>Register</button>
            </form>

            <p className='text-center pt-4 fs-5'>Already Registered <Link to='/login'>Login here</Link>!!</p>
        </div>
    );
}

export default Register;

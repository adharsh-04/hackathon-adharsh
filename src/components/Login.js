import { compareSync } from 'bcryptjs';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    let {register,handleSubmit,formState:{errors}} =useForm();
    let navigate=useNavigate();
    function handleFormSubmit(newCredentialsObject){
        fetch(`http://localhost:4000/posts?email=${newCredentialsObject.email}`)
        .then(res=>res.json())
        .then((userObjArray)=>{
          if(userObjArray.length===0)
          alert("invalid email");
        else
        {
             let result=compareSync(newCredentialsObject.password,userObjArray[0].password);
             if(result===true){
              navigate('/dashboard')

             }
             else{
              alert("invalid password");
             }
        }
        })
        .catch(err=>console.log("err in login",err))
    }
  return (
    <div className='container'>
        <h2 className='text-center text-secondary mt-4'>Login Form</h2>
        <form className='d-block mx-auto w-50' onSubmit={handleSubmit(handleFormSubmit)}>
            
            <div className='m-3'>
            <label className='form-label' htmlFor='email'>Email</label>
            <input type='email' className='form-control' name='email' placeholder='Enter Email' {...register('email',{required:true})}/>
            {errors.email?.type==='required'&&<p className='text-danger'>Please Enter Email</p>}
            </div>
            <div className='m-3'>
            <label className='form-label' htmlFor='password'>Password</label>
            <input type='password' className='form-control' name='password' placeholder='Enter Password' {...register('password',{required:true})}/>
            {errors.password?.type==='required'&&<p className='text-danger'>Please Enter Password</p>}
            </div>
            <button className='btn btn-danger d-block mx-auto'>Login</button>
        </form>
        <p className='text-center pt-3 fs-5'>Are you new User <Link to='/register'>Register here</Link>!!</p>

    </div>
  )
}

export default Login
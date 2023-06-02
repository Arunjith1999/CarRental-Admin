import React, { useEffect } from 'react'
import styles from './AdminLogin.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faLock, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Cookies from 'js-cookie'
import * as yup from 'yup'
import { toast } from 'react-hot-toast'
import {useForm} from 'react-hook-form'

import { adminPost } from '../../../utils/Constants'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextField} from '@mui/material';
import axios from '../../../utils/Axios'



const schema = yup.object().shape({
    email : yup
            .string('email should be a string')
            .email ('please provide a valid email')
            .required('email address is required'),
    password : yup
              .string('password should be a string')
              .required('password required')
                
})

const AdminLogin = () => {
    const Navigate = useNavigate()
    const {register, handleSubmit, formState : {errors}} = useForm({resolver : yupResolver(schema)})
    const token = Cookies.get('admin_id')
    useEffect(()=>{
       if(token){
        Navigate('/admin_home')
       }
    })
    const onSubmit =(data)=>{
        axios.post(adminPost,data,{
            headers:{'content-Type':"application/json"},
        } ).then((res)=>{
            console.log(res.data,'////////');
            if(res.data.status === 'true'){
                toast.success('logined Successfully.. ',{
                    position:'top-right',
                    style:{
                        borderRadius : '10px',
                        background:  '#333',
                        color: '#fff'
                    }
                })
                Cookies.set("jwt",String(res.data.jwt_token))
                Cookies.set("admin_id",String(res.data.admin_id))
                Navigate('/admin_home')
            }else{
                toast.error('Invalid Email or Password',{
                    position: 'top-right',
                    style:{
                        borderRadius : '10px',
                        background: '#333',
                        color : '#fff'
                    }
                })
            }
        })
    }
  return (
    <div>
        <div>
       
        <h1 className='text-dark text-center'>Admin Login</h1>
        </div>
  
      <div className= {styles.container}>
        
	<div className={styles.screen}>
		<div className={styles.screen__content}>
			<form className={styles.login} component = 'form' onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.login__field}>
                    <FontAwesomeIcon icon = {faUser}></FontAwesomeIcon>
					<TextField type="email" 
                     variant="standard"
                    className={styles.login__input}
                    id ='email'
                    name ='email'
                    error ={!!errors.email} 
                    helperText = {errors.email ? errors.email.message: ''}
                     placeholder=" Email"
                     {...register('email')}
                     />
				</div>
				<div className={styles.login__field}>
				 <FontAwesomeIcon icon ={faLock}></FontAwesomeIcon>
					<TextField type="password"
                    variant="standard"
                     className="login__input"
                      placeholder="Password"
                      id = 'password'
                      name = 'password'
                      error = {!!errors.password}
                      helperText = {errors.password ? errors.password.message:''}
                      {...register('password')}
                      />
				</div>
				<button className={`${styles.button} ${styles.login__submit}`} type='submit'>
					<span className= {styles.button__text} >Log In Now</span>
                     <FontAwesomeIcon icon ={faChevronRight} style={{paddingLeft:'8rem'}} ></FontAwesomeIcon>
				</button>				
			</form>
			{/* <div className="social-login">
				<h3>log in via</h3>
				<div className="social-icons">
					<a href="#" className="social-login__icon fab fa-instagram"></a>
					<a href="#" className="social-login__icon fab fa-facebook"></a>
					<a href="#" className="social-login__icon fab fa-twitter"></a>
				</div>
			</div> */}
		</div>
		<div className={styles.screen__background}>
			<span className={`${styles.screen__background__shape} ${styles.screen__background__shape4}`}></span>
			<span className={`${styles.screen__background__shape} ${styles.screen__background__shape3}`}></span>		
			<span className={`${styles.screen__background__shape} ${styles.screen__background__shape2}`}></span>		
			<span className={`${styles.screen__background__shape} ${styles.screen__background__shape1}`}></span>		
			
		</div>		
	</div>
</div>

    </div>
  )
}

export default AdminLogin

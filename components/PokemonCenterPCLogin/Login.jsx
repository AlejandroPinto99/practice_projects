import React, {useEffect} from 'react'
import Image from 'next/image'

import LoginStyle from './Login.module.css'

import Rotom from '../../images/rotom.png'


const Login = () => {

 useEffect(() => {
    if(process.browser){
        const labels = document.querySelectorAll('.Login_form_control__wviY2 label');

        labels.forEach(label => {
            label.innerHTML = label.innerText
                .split('')
                .map((letter, index) => `<span key=${index} style="transition-delay: ${index * 50}ms">${letter}</span>`)
                .join('')
        })
    }
 })
    
    return(
        <div className={LoginStyle.container}>
            <h1>Welcome to the Pokemon Center PC System</h1>
            <p>Please Log in!</p>
            <form>
                <div className={LoginStyle.rotom}>
                    <Image src={Rotom} height={500} width={500} alt="rotom"/>
                </div>
                <div className={LoginStyle.form_control}>
                    <input type="text" required />
                    <label>Email</label>
                </div>

                <div className={LoginStyle.form_control}>
                    <input type="password" required />
                    <label>Password</label>
                </div>

                <button className={LoginStyle.btn}>Login</button>
                <p className={LoginStyle.text}>Dont have an account? 
                    <a href="#">Register</a>
                </p>
            </form>
        </div>
    )
};

export default Login;
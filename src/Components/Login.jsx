import React from 'react'
import {googleAuth} from '../Firebase/FirebaseAuth'
import GoogleButton from 'react-google-button'
import {LoginStyles} from '../Styles/LoginStyles'
import "../Styles/App.css";
import {Typography} from 'antd'
import 'antd/dist/antd.css';
const {Title}=Typography;
const {Container} =LoginStyles();
const Login = ()=>{
    window.addEventListener("load", () => {
        if(window.location.pathname!=="/"){
            window.location.href="/"
        }
    });
    return (
    <div className="container-styles animate__animated animate__fadeIn" style={LoginStyles()}>
        <div style={Container}>
        <Title style={{color:"white"}}>Login</Title>
        <hr style={{width:"100%"}}/>
        <GoogleButton onClick={googleAuth}/>
        </div>
    </div>
        )
}
export default Login;
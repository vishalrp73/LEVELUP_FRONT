import './logSign.css';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import stud_photo from '../../img/logSignModal/reg-stud-photo.png';
import teach_photo from '../../img/logSignModal/reg-teach-photo.png';

const LogSign = (props) => {

    const [log, setLog] = useState(props.log);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPass, setConfPass] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const history = useHistory();

    useEffect(() => {
        setLog(props.log)
    }, [props])

    const handleRefresh = () => {
        window.location.reload(false)
    }

    const handleSignUp = () => {
        axios.post('http://localhost:4000/signup', {
            "email": email,
            "password": password
        })
        .then (response => {
            console.log(response.status)
            console.log('Successful user sign up')
        })
        .catch (err => console.log(err))
    }

    const handleLogin = () => {
        axios.post('http://localhost:4000/login', {
            email: email,
            password: password
        })
        .then (response => {

            localStorage.setItem('user_id', response.data[0].user_id)
            localStorage.setItem('name', response.data[0].first_name)
            localStorage.setItem('role', response.data[0].role)
            localStorage.setItem('pic', response.data[0].profile_pic)
            setLoggedIn(true);
        })
        .then (history.push(ROUTES.TEACH_DASH))
        .then (() => handleRefresh())
        .catch (err => console.log(err));
    }
    
    const handleClick = (value) => {
        if (value == 'login-text') {
            setLog(true)
        } else if (value == 'signup-text') {
            setLog(false)
        }
    }

    const signup = () => {
        return (
            <div className = 'reg-modal-wrapper'>
                
                <div className = 'students-wrapper'>

                    <img src = { stud_photo } className = 'reg-stud-photo' />
                    <h2 className = 'reg-title'>Students</h2>

                    <div className = 'reg-switch-btn'>
                        <h4 onClick = {(e) => handleClick(e.target.className)} id = 'sign-login-switch' className = 'login-text'>LOG IN</h4>
                        <h4 onClick = {(e) => handleClick(e.target.className)} id = 'sign-signup-switch' className = 'signup-text'>SIGN UP</h4>
                    </div>

                    <div className = 'input-wrapper' >
                        <input type = 'text' placeholder = 'Full Name' className = 'input-fields' onChange = {(e) => setFullName(e.target.value)} />
                        <input type = 'email' placeholder = 'Email Address' className = 'input-fields' onChange = {(e) => setEmail(e.target.value)} />
                        <input type = 'password' placeholder = 'Password' className = 'input-fields' onChange = {(e) => setPassword(e.target.value)} />
                        <input type = 'password' placeholder = 'Confirm Password' className = 'input-fields' onChange = {(e) => setConfPass(e.target.value)} />
                    </div>

                    <input type = 'button' className = 'sign-btn' value = 'SIGN UP' onClick = {() => handleSignUp()} />

                </div>

                <div className = 'teachers-wrapper'>

                    <img src = { teach_photo } className = 'reg-teach-photo' />
                    <h2 className = 'reg-title'>Teachers</h2>

                    <div className = 'reg-switch-btn'>
                        <h4 onClick = {(e) => handleClick(e.target.className)} id = 'sign-login-switch' className = 'login-text'>LOG IN</h4>
                        <h4 onClick = {(e) => handleClick(e.target.className)} id = 'sign-signup-switch' className = 'signup-text'>SIGN UP</h4>
                    </div>

                    <div className = 'input-wrapper'>
                        <input type = 'text' placeholder = 'Full Name' className = 'input-fields' onChange = {(e) => setFullName(e.target.value)} />
                        <input type = 'email' placeholder = 'Email Address' className = 'input-fields' onChange = {(e) => setEmail(e.target.value)} />
                        <input type = 'password' placeholder = 'Password' className = 'input-fields' onChange = {(e) => setPassword(e.target.value)} />
                        <input type = 'password' placeholder = 'Confirm Password' className = 'input-fields' onChange = {(e) => setConfPass(e.target.value)} />
                    </div>

                    <input type = 'button' className = 'sign-btn' value = 'SIGN UP' onClick = {() => handleSignUp() }/>

                </div>

            </div>
        )
    }

    

    const login = () => {
        return (
            <div className = 'reg-modal-wrapper'>

                <div className = 'students-wrapper'>
                    
                    <img src = { stud_photo } className = 'reg-stud-photo' />
                    <h2 className = 'reg-title'>Students</h2>

                    <div className = 'reg-switch-btn'>
                        <h4 onClick = {(e) => handleClick(e.target.className)} id = 'log-login-switch' className = 'login-text'>LOG IN</h4>
                        <h4 onClick = {(e) => handleClick(e.target.className)} id = 'log-signup-switch' className = 'signup-text'>SIGN UP</h4>
                    </div>

                    <div className = 'input-wrapper'>
                        <input type = 'email' placeholder = 'Email Address' className = 'input-fields' onChange = {(e) => setEmail(e.target.value)} />
                        <input type = 'password' placeholder = 'Password' className = 'input-fields' onChange = {(e) => setPassword(e.target.value)} />
                    </div>

                    <input type = 'button' className = 'login-btn' value = 'LOGIN' onClick = {handleLogin } />

                </div>

                <div className = 'teachers-wrapper'>
                   
                    <img src = { teach_photo } className = 'reg-teach-photo' />
                    <h2 className = 'reg-title'>Teachers</h2>

                    <div className = 'reg-switch-btn'>
                        <h4 onClick = {(e) => handleClick(e.target.className)} id = 'log-login-switch' className = 'login-text'>LOG IN</h4>
                        <h4 onClick = {(e) => handleClick(e.target.className)} id = 'log-signup-switch' className = 'signup-text'>SIGN UP</h4>
                    </div>

                    <div className = 'input-wrapper'>
                        <input type = 'email' placeholder = 'Email Address' className = 'input-fields' onChange = {(e) => setEmail(e.target.value)} />
                        <input type = 'password' placeholder = 'Password' className = 'input-fields' onChange = {(e) => setPassword(e.target.value)} />
                    </div>

                    <input type = 'button' className = 'login-btn' value = 'LOGIN' onClick = {handleLogin } />

                </div>

            </div>
        )
    }

    return (
        <>
        {
            log ? login() : signup()
        }
        </>
    )
            
        
}

export default LogSign;
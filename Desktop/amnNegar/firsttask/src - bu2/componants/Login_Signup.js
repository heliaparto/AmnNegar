
import React from 'react';
import {
    Link,
    Redirect
} from "react-router-dom";
import Login from './login'
import SignUp from './signup'
import '../App.css';
import { Transition,CSSTransition } from 'react-transition-group';


export default class Login_Signup extends React.Component {
    constructor() {
        super()
        this.state = {
            choice: 'login'
        }
    }
    render () {

        return (

            <div className='container'>
                <div className='Orange_container'>
                    <div className='left_side_of_orange_container'>
                        <div className='left_side_of_orange_container_text_part'>
                            <p>Welcome</p>
                        </div>
                        <div className='left_side_of_orange_container_login_button'>
                            <button className='loginButton'>Login</button>
                        </div>
                    </div>
                    <div className='right_side_of_orange_container'>
                        <div className='Login_signup_bar'>
                            <div className='Animated_background_login'>
                            </div>

                            <div className='login' >
                                <Link to='/' name='login'
                                      onClick={() => this.setState({choice: 'login'})}>Login
                                </Link>
                            </div>

                            <div className='signup'>
                                <Link to='/signUp' name='signUp'
                                      onClick={() => this.setState({choice: 'signup'})}
                                >signup</Link>
                            </div>

                        </div>
                        <div className='form_field'>
                            { this.state.choice === 'login' ?
                                <Login/>
                                : <SignUp/>
                            }




                        </div>

                    </div>

                </div>

            </div>

        )
    }
}



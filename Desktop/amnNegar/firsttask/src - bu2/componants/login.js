import React from 'react';
import '../App.css';

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange(e) {
        console.log('value::::', e.target.value);
        var name = e.target.name;
        this.setState({[name]: e.target.value})

    }

    handleClick(e){
        console.log('ok')
        let data = {
            email: this.state.email,
            password: this.state.password
        }
    }



    render () {
        return (
            <div className='Login_container'>

                <div>
                    <input name='Email'
                           placeholder='Email'
                           className='input_field Login_input_field'
                           onChange={(e) => this.handleChange(e)}
                    />
                </div>
                <div>
                    <input name='password'
                           placeholder='password'
                           className='input_field Login_input_field'
                           type='password'
                           onChange={(e) => this.handleChange(e)}
                    />
                </div>
                <div>
                    <button
                        className='loginButton_Right'
                        onClick={() => this.handleClick()}>
                        Login
                    </button>
                </div>



            </div>


        )
    }
}



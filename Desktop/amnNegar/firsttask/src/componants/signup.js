import React from 'react';
import axios from 'axios'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import "../styles/date.css";
import '../App.css';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            full_name: '',
            user_gender: '',
            user_password: '',
            user_age: '',
            user_Email: '',
            user_Type:'visitor'
        };

    }

    handleChange(e) {

        console.log('value::::', e.target.value);
        var name = e.target.name;
        this.setState({
            [name]: e.target.value,
        });

    }

    handleDate(date) {
        this.setState({
            startDate: date
        });
    }

    handleClick(){

        let data = {
            full_name: this.state.full_name,
            user_gender: this.state.user_gender,
            user_password: this.state.user_password,
            user_age: this.state.user_age,
            user_Type: this.state.user_Type,
            user_Email: this.state.user_Email
        }
        console.log('datttaaaa:::::::',data);
        axios.post('http://localhost/helloworld/api/post/create.php', JSON.stringify(data))
            .then(function (response) {
                console.log('response::::',response);
                window.localStorage.setItem('token', response.data.token)
                window.localStorage.setItem('id', response.data.id)
            })
            .catch(function (error) {
                console.log('error::::',error);
            })
    }


    render () {
        return (
            <div className='SignUp_container'>
                <div className='SignUp_form'>
                    <div className='SignUp_form_left_side' >
                        <div>
                            <input placeholder='full_Name'
                                   name='full_name'
                                   className='Signup_input_field input_field'
                                   onChange={(e) => this.handleChange(e)}
                            />
                        </div>

                        <div>
                            <input
                                placeholder='Email'
                                name='user_Email'
                                className='Signup_input_field input_field'
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>

                        <div className='radio_container'>
                            <label className='gender_radio'>Male
                                <input type='radio'
                                       name='user_gender'
                                       value='male'
                                       className='radio_button'
                                       onChange={(e) => this.handleChange(e)}
                                />
                                <span className="radio_button"></span>
                            </label>

                            <label className='gender_radio'>Female
                                <input type='radio'
                                       name='user_gender'
                                       value='female'
                                       className='radio_button'
                                       onChange={(e) => this.handleChange(e)}
                                />
                                <span className="radio_button"></span>
                            </label>
                        </div>


                    </div>
                    <div className='SignUp_form_right_side'>
                        <div>
                            <input placeholder='user_age'
                                   className='Signup_input_field input_field'
                                   name='user_age'
                                   onChange={(e) => this.handleChange(e)}/>
                        </div>

                        <div>
                            <input
                                placeholder='Password'
                                name='user_password'
                                className='Signup_input_field input_field'
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>

                        <div>
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={(e)=>this.handleDate(e)}
                                placeholder='X'
                                className='Signup_input_field input_field'
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                            />
                        </div>

                    </div>
                </div>



                <div>
                    <button
                        className='loginButton_Right'
                        onClick={()=>this.handleClick()}>SignUp</button>
                </div>

            </div>


        )
    }
}



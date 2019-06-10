import insta from "../images/instagram.png";
import fb from "../images/facebook.png";
import twitter from "../images/twitter.png";
import telegram from "../images/telegram.png";
import React from "react";
import {
    Link,
    Redirect
} from "react-router-dom";
import '../App.css';
import '../styles/ContactStyle.css';


export default class Footer extends React.Component {
    render () {

        return(

<div className='footer'>{/*6 --footer*/}
    <div>
        <div className='footer_box_titles'>
            <p>شبکه های اجتماعی</p>
        </div>

        <div className='socialMedia'>
            <a href="https://instagram.com/ordibahar_andishe?igshid=13hzlrqfo5idid"><img  alt='Instagram' src={insta} className='socialMediaIcons'/></a>
            <a href="https://facebook.com"><img alt='Facebook' src={fb} className='socialMediaIcons'/></a>
            {/*<a href="google.com"><img alt='Twitter' src={twitter} className='socialMediaIcons'/></a>*/}
            <a href="https://web.telegram.org/#/im?p=@ordibahar_andishe"><img alt='Telegram' src={telegram} className='socialMediaIcons'/></a>
        </div>
    </div>

    <div>
        <div className='footer_box_titles'>
            <p>تماس با ما</p>
        </div>

        <div className='footer_box_text'>
            <p><Link className='footer_contact-link' to='/contactUs'>آدرس</Link></p>
            <p><Link className='footer_contact-link' to='/contactUs'>ایمیل</Link></p>
            <p><Link className='footer_contact-link' to='/contactUs'>تلفن</Link></p>
            <p><Link className='footer_contact-link' to='/contactUs'>فکس</Link></p>
        </div>
    </div>

    <div>
        <div className='footer_box_titles'>
            <p>لینک های محبوب</p>
        </div>

        <div className='footer_box_text'>
            <p><Link className='footer_contact-link' to='/news'>اخبار</Link></p>
            <p><Link className='footer_contact-link' to='/references'>منابع </Link></p>
            <p><Link className='footer_contact-link' to='/CharacterAnalysis'>شخصیت شناسی</Link></p>
            <p><Link className='footer_contact-link' to='/underconstruction'>تالار گفتمان</Link></p>
        </div>
    </div>


</div>
        )}}
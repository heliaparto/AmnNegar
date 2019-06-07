import insta from "../images/instagram.png";
import fb from "../images/facebook.png";
import twitter from "../images/twitter.png";
import telegram from "../images/telegram.png";
import React from "react";

export default class Footer extends React.Component {
    render () {

        return(

<div className='footer'>{/*6 --footer*/}
    <div>
        <div className='footer_box_titles'>
            <p>شبکه های اجتماعی</p>
        </div>

        <div className='socialMedia'>
            <img alt='Instagram' src={insta} className='socialMediaIcons'/>
            <img alt='Facebook' src={fb} className='socialMediaIcons'/>
            <img alt='Twitter' src={twitter} className='socialMediaIcons'/>
            <img alt='Telegram' src={telegram} className='socialMediaIcons'/>
        </div>
    </div>

    <div>
        <div className='footer_box_titles'>
            <p>تماس با ما</p>
        </div>

        <div className='footer_box_text'>
            <p>آدرس</p>
            <p>تلفن</p>
            <p>فکس</p>
            <p>ایمیل</p>
        </div>
    </div>

    <div>
        <div className='footer_box_titles'>
            <p>لینک های محبوب</p>
        </div>

        <div className='footer_box_text'>
            <p>اخبار</p>
            <p>منابع</p>
            <p>تست ها</p>
            <p>تالار گفتمان</p>
        </div>
    </div>


</div>
        )}}
import React from 'react';
import '../App.css';
import logo from '../images/bahar.png';
import mainCover from '../images/BackGround.jpg';
import Footer from './Footer'
import motto from '../images/motto.png';
import Header from './header'
import {
  Link,
  Redirect
} from "react-router-dom";




export default class LandingPage extends React.Component {
  render () {

    return(
      <div className='container'>
        <Header/>


{/*2*/}
          <div className='MainFirstSection'>
            <div className='MainFirstSection_inside'>
              <div>
              <img className='mainCover' src={mainCover}/>
              </div>

              <div className='motto'>
                <img src={motto} className='motto_pic'/>
              </div>
            </div>

          </div>
{/*3*/}
          <div className='MainSecondSection'>
            <div className='box_titles'><p>اردیبهار چیست؟</p></div>
            <div className='box_text'>
              <p>
                یه چیز خودمونی تر
              </p>
            </div>
            <div className='box_button '>
              <button className='Morebutton wide'>
                <Link className='link_text' to='/introduction'>بیشتر بخوانید</Link>
              </button>
            </div>


          </div>



          <div className='seperator'>{/*4 --ba ordibahar*/}
            <span className='ba'>با </span>
            <img src={logo} className='seperator_logo'/>
          </div>

          <div className='MainThirdSection'>{/*5*/}
            <div className='MainSecondSection_boxes'>{/*1*/}
              <div className='box_titles'>
                <p>شخصیتتو بشناس</p>
              </div>

              <div className='box_text'>
              <p>با دادن تست های روانشناسی شخصیت خودت رو بشناس و بهترین راه رو پیدا کن</p>
              </div>

              <div className='box_button'>
                <button className='Morebutton'>
                  <Link className='link_text' to='/CharacterAnalysis'>بیشتر بخوانید</Link>
                </button>
              </div>
            </div>

            <div className='MainSecondSection_boxes'>{/*2*/}
              <div className='box_titles'>
                <p>منابع رو بشناس</p>
              </div>

              <div className='box_text'>
              <p>معرفی تمام منابعی  که برای درس خوندن نیاز داری در اردیبهار</p>
              </div>

              <div className='box_button'>
                <button className='Morebutton'>
                  <Link className='link_text' to='/references'>بیشتر بخوانید</Link>
                </button>
              </div>
            </div>

            <div className='MainSecondSection_boxes'>{/*3*/}
              <div className='box_titles'>
                <p>برای درس خوندن گروه تشکیل بده</p>
              </div>

              <div className='box_text'>
              <p>تو اردیبهار میتونی افرادی که دارن تو مقطع تو تحصیل میکنن رو پیدا کنی و با هم درس بخونین</p>
              </div>

              <div className='box_button'>
                <button className='Morebutton'>
                  <Link className='link_text' to='/underconstruction'>بیشتر بخوانید</Link>
                </button>
              </div>

            </div>

            <div className='MainSecondSection_boxes'>{/*4*/}
              <div className='box_titles'>
                <p>از آخرین اخبار مطلع شو</p>
              </div>

              <div className='box_text'>
              <p>به روز ترین اطلاعیه های تحصیلی را اینجا بخوانید</p>
              </div>

              <div className='box_button'>
                <button className='Morebutton'>
                  <Link className='link_text' to='/news'>بیشتر بخوانید</Link>
                </button>
              </div>

            </div>
          </div >

          <div className='seperator2'>
            <p></p>
          </div>

          <Footer/>




        </div>



  )
  }
}

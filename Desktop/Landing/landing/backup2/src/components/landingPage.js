import React from 'react';
import '../App.css';
import logo from '../images/bahar.png';
import mainCover from '../images/BackGround.jpg';
import insta from '../images/instagram.png';
import telegram from '../images/telegram.png';
import twitter from '../images/twitter.png';
import fb from '../images/facebook.png';
import motto from '../images/motto.png';




export default class LandingPage extends React.Component {
  render () {

    return(
      <div className='container'>
{/*1*/}
          <div className='header'>{/*1--header*/}
            <div className='headerLeftPart'>{/*1--logo*/}
              <img className='logoOfLandingPage' src={logo}/>
            </div>

            <div className='headerRightPart'>{/*2--contact*/}


              <div className='headerRightPart_secondSection'>
                <span className='headerRightPart_secondSection_items'>909-111-111</span>
                <span className='headerRightPart_secondSection_items'>تماس با ما</span>
                <span className='headerRightPart_secondSection_items'>مشاوره تحصیلی</span>


              </div>
            </div>
          </div>
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
                <button className='button' >بیشتر بخوانید
                </button>
              </div>
            </div>

            <div className='MainSecondSection_boxes'>{/*2*/}
              <div className='box_titles'>
                <p>به منابع دسترسی داشته باش</p>
              </div>

              <div className='box_text'>
              <p>معرفی تمام منابعی  که برای درس خوندن نیاز داری در اردیبهار</p>
              </div>

              <div className='box_button'>
                <button className='button'>بیشتر بخوانید
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
                <button className='button'>بیشتر بخوانید
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
                <button className='button'>بیشتر بخوانید
                </button>
              </div>

            </div>
          </div >

          <div className='seperator2'>
            <p></p>
          </div>



            <div className='footer'>{/*6 --footer*/}
              <div>
                <div className='footer_box_titles'>
                  <p>شبکه های اجتماعی</p>
                </div>

                <div className='socialMedia'>
                  <img src={insta} className='socialMediaIcons'/>
                  <img src={fb} className='socialMediaIcons'/>
                  <img src={twitter} className='socialMediaIcons'/>
                  <img src={telegram} className='socialMediaIcons'/>
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
        </div>



  )
  }
}

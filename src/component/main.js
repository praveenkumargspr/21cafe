import './main.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Header from './header';
import Footer from './footer';
import MenuItemList from './menu/menuItemList';
import { useNavigate } from 'react-router-dom';


function Main() {
    const navigate = useNavigate();

    const menuItemBtnClick = () => {
        navigate('./menu')
    }

    const bookTableBtnClick = () => {
        navigate('./bookatable')
    }


    return (
        <div className="homePage">
            <Header />
            <section>
                <div className='firstsec'>
                    {/* <div> */}
                    <div className='firstSecContent'>
                        <div>
                            <h1 className='cafeName'><strong>21'Cafe.</strong></h1>
                        </div>
                        <div>
                            <p className='cafeAddress'><strong>JP Nagar, 1st Phase, Bangalore-76</strong></p>
                        </div>
                    </div>
                    <div className='firstSecContent2'>
                        <div>
                            <span><a href='https://www.facebook.com/' target={"_blank"} title="Go to Facebook Page"><img src='/assets/img/facebook.png' width={30} height={30} /></a></span>
                            <span><a href='https://www.instagram.com/' target={"_blank"} title="Go to Instagram Page"><img src='/assets/img/instagram.png' width={27} height={27} /></a></span>
                            <span><a href='https://www.tripadvisor.com/' target={"_blank"} title="Go to Tripadvisor Page"><img src='/assets/img/social.png' width={30} height={30} /></a></span>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </section>
            <section>
                <div className='secondSec'>
                    <div className='secondSecContent'><p>Our cafe is small but with a big love for wonderful desserts.</p></div>
                </div>
            </section>
            <section>
                <div className='thirdSec'>
                    <MenuItemList type="SMALL BITES"/>
                    <div>
                        <button className="menuItemBtn" onClick={menuItemBtnClick}>View the menu</button>
                    </div>
                </div>
            </section>
            <section>
                <div className='fourthSec'>
                    <div className='fourthSecContent'>
                        <p className='fourthSecContent1'>We serve coffee!</p>
                        <p className='fourthSecContent2'>Because, We believe a cup of coffee is one of the most important, simple pleasures in life</p></div>
                </div>
            </section>
            <section>
                <div className='fivSec'>
                    <div className='fivSecContent'>
                        <p className='fivSeccContent1'>BOOK A TABLE</p>
                        <p className='fivSecContent2'>Breakfast, lunch, or weekend brunch, we’re always open for reservations.</p>
                    </div>
                    <div>
                        <button className="bookTableBtn" onClick={bookTableBtnClick}>Book a table</button>
                    </div>
                </div>
            </section>
            <section>
               <Footer/>
            </section>
        </div>
    )
}
export default Main;
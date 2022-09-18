import './main.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './header'
function sidebartoggle() {

}


function Main() {
    const [toggleflag, setToggleflag] = useState(false);

    const menuItemBtnClick = () => {
        alert("menu button clcik")
    }
    return (
        <div className="homePage">
            <Header/>
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
                        <span><a href='https://www.instagram.com/' target={"_blank"} title="Go to Facebook Page"><img src='/assets/img/facebook.png' width={30} height={30} /></a></span>
                        <span><a href='https://www.instagram.com/' target={"_blank"} title="Go to Instagram Page"><img src='/assets/img/instagram.png' width={27} height={27} /></a></span>
                        <span><a href='https://www.instagram.com/' target={"_blank"} title="Go to Tripadvisor Page"><img src='/assets/img/social.png' width={30} height={30} /></a></span>
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
                    <div>
                        <h1 className='menuHead'><strong>SMALL BITES</strong></h1>
                    </div>
                    <div className="thirdSecContent">
                        <div className='leftContent'>
                            <ul>
                                <li >
                                    <div className="menuNameAndRate">
                                        <span className='menuName'><strong>BREAD ROLLS</strong></span>
                                        <span className='menuRate'>$100</span>
                                    </div>
                                    <div className="menuDiscription">
                                        Our handmade bread rolls come in all shapes and sizes
                                    </div>
                                </li>
                                <li >
                                    <div className="menuNameAndRate">
                                        <span className='menuName'><strong>BREAD ROLLS</strong></span>
                                        <span className='menuRate'>$100</span>
                                    </div>
                                    <div className="menuDiscription">
                                        Our handmade bread rolls come in all shapes and sizes
                                    </div>
                                </li>
                                <li >
                                    <div className="menuNameAndRate">
                                        <span className='menuName'><strong>BREAD ROLLS</strong></span>
                                        <span className='menuRate'>$100</span>
                                    </div>
                                    <div className="menuDiscription">
                                        Our handmade bread rolls come in all shapes and sizes
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='rigthContent'>
                            <ul>
                                <li>
                                    <div className="menuNameAndRate">
                                        <span className='menuName'><strong>BREAD ROLLS</strong></span>
                                        <span className='menuRate'>$100</span>
                                    </div>
                                    <div className="menuDiscription">
                                        Our handmade bread rolls come in all shapes and sizes
                                    </div>
                                </li>
                                <li >
                                    <div className="menuNameAndRate">
                                        <span className='menuName'><strong>BREAD ROLLS</strong></span>
                                        <span className='menuRate'>$100</span>
                                    </div>
                                    <div className="menuDiscription">
                                        Our handmade bread rolls come in all shapes and sizes
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
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
                        <button className="bookTableBtn" onClick={menuItemBtnClick}>Book a table</button>
                    </div>
                </div>
            </section>
            <section>
                <div className='sixSec'>
                    <div className='sixSecContent'>
                        <div className='sixSecContent_1'>
                            <p className='sixSecContent1'><strong>21'Cafe.</strong></p>
                            <p className='sixSecContent2'>JP Nagar, 1st Phase, Bangalore-76</p>
                            <p className='sixSecContent4'>MONDAY - FRIDAY <br /><span>6:00 AM TO 9:00 PM </span></p>
                            <p className='sixSecContent6'>SATURDAY - SUNDAY <br /><span>10:00 AM TO 8:00 PM</span></p>
                        </div>
                        <div className='sixSecContent_2'>
                            <p className='sixSecContent2'>Contact: 91+ 8745667523</p>
                            <div className='sixSecContenticon'>
                                <span><a href='https://www.instagram.com/' target={"_blank"} title="Go to Facebook Page"><img src='/assets/img/facebook.png' width={30} height={30} /></a></span>
                                <span><a href='https://www.instagram.com/' target={"_blank"} title="Go to Instagram Page"><img src='/assets/img/instagram.png' width={27} height={27} /></a></span>
                                <span><a href='https://www.instagram.com/' target={"_blank"} title="Go to Tripadvisor Page"><img src='/assets/img/social.png' width={30} height={30} /></a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Main;
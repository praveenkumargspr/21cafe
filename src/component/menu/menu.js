import Header from '../header';
import Footer from '../footer';
import MenuItemList from './menuItemList';
import './menu.css';
import { useNavigate } from 'react-router-dom';

export default function Menu() {
    const navigate = useNavigate();
    const bookTableBtnClick = () => {
        navigate('/bookatable')
    }
    return (
        <>
            <Header />
            <section>
                <div className='menuFirstsec'>
                    <div className='itsMenu'>
                        <div>
                            <h1 className='itsMenuTxt'><strong>IT'S MENU</strong></h1>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='menuCon'>
                    <MenuItemList type="SMALL BITES" />
                    <MenuItemList type="MEALS" />
                </div>
            </section>
            <section>
                <div className='fivSec'>
                    <div className='fivSecContent'>
                        <p className='fivSeccContent1'>BOOK A TABLE</p>
                        <p className='fivSecContent2'>Accepting a reservations any time.</p>
                    </div>
                    <div>
                        <button className="bookTableBtn" onClick={bookTableBtnClick}>Book a table</button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
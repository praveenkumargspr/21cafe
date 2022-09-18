import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <header className="mainHeader">
                <div className='leftItem'><Link to={"/"}>21Cafe.</Link></div>
                <div className='rigthItems'>
                    <ul>
                        <li><Link to={"/menu"}>Menu</Link></li>
                        <li><Link to={"/menu"}>Contact</Link></li>
                        <li><Link to={"/menu"}>Book a table</Link></li>
                    </ul>
                </div>
            </header>
        </div>
    );
}
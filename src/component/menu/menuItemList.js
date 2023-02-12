import { useState, useEffect } from 'react';
import './menuItemList.css'
import axios from 'axios'
import listData from './listData'
export default function MenuItemList(cat) {

    const [menuList, setMenuList] = useState([]);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        // axios.get('http://localhost:3005/menu').then((response) => {
        //     console.log(response.data)
        //     setMenuList(response.data)
        // })
        setMenuList(listData)
    }, [setMenuList])


    useEffect(() => {
        function handleWindowResize() {
            setIsMobile(window.innerWidth < 800 ? true : false);
        }
        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [setIsMobile]);

    const menuData = filterMenuList(menuList, cat.type)
    let leftContentData = [];
    let rigthContentData = [];
    let contentData = [];
    if (menuData.length > 0) {
        if (!isMobile) {
            let list = [...menuData]
            let mid = Math.round(list.length / 2)
            leftContentData = list.slice(0, mid);
            rigthContentData = list.slice(mid);
        } else {
            contentData = [...menuData];
        }
    }
    function filterMenuList(data, cat) {
        return data.length > 0 ? data.filter((it) => { return (it.ItemCategory == cat) }) : [];
    }
    return (
        <div>
            <div>
                <h1 className='menuListHead'><strong>{cat.type}</strong></h1>
            </div>
            <div className="menuListContent">
                {!isMobile ?
                    <>
                        <div className='leftContent'>
                            <ul>
                                {
                                    leftContentData?.map((item) => {
                                        return <li key={item.Items}>
                                            <div className="menuNameAndRate">
                                                <span className='menuName'><strong>{item.Items}</strong></span>
                                                <span className='menuRate'>₹{item.ItemPrice}</span>
                                            </div>
                                            <div className="menuDiscription">
                                                {item.ItemDescription}
                                            </div></li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className='rigthContent'>
                            <ul>
                                {
                                    rigthContentData?.map((item) => {
                                        return <li key={item.Items}>
                                            <div className="menuNameAndRate">
                                                <span className='menuName'><strong>{item.Items}</strong></span>
                                                <span className='menuRate'>₹{item.ItemPrice}</span>
                                            </div>
                                            <div className="menuDiscription">
                                                {item.ItemDescription}
                                            </div></li>
                                    })
                                }
                            </ul>
                        </div>
                    </>
                    :
                    <div className='Content'>
                        <ul>
                            {
                                contentData?.map((item) => {
                                    return <li key={item.Items}>
                                        <div className="menuNameAndRate">
                                            <span className='menuName'><strong>{item.Items}</strong></span>
                                            <span className='menuRate'>₹{item.ItemPrice}</span>
                                        </div>
                                        <div className="menuDiscription">
                                            {item.ItemDescription}
                                        </div></li>
                                })
                            }
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
}
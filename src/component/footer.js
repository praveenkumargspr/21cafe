import { useState, useEffect } from 'react';

export default function Footer() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        function handleWindowResize() {
            setIsMobile(window.innerWidth < 700 ? true : false);
        }
        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [setIsMobile]);
    return (
        <div>
            <div className='footerSec'>
                <div className='footerSecContent'>
                    {!isMobile ?
                        <>
                            <div className='footerSecContent_1'>
                                <p className='footerSecContent1'><strong>21'Cafe.</strong></p>
                                <p className='footerSecContent2'>JP Nagar, 1st Phase, Bangalore-76</p>
                                <p className='footerSecContent4'>MONDAY - FRIDAY <br /><span>6:00 AM TO 9:00 PM </span></p>
                                <p className='footerSecContent6'>SATURDAY - SUNDAY <br /><span>10:00 AM TO 8:00 PM</span></p>
                            </div>
                            <div className='footerSecContent_2'>
                                <p className='footerSecContent2'>Contact: 91+ 8745667523</p>
                                <div className='footerSecContenticon mt50'>
                                    <span><a href='https://www.facebook.com/' target={"_blank"} title="Go to Facebook Page"><img src='/assets/img/facebook.png' width={30} height={30} /></a></span>
                                    <span><a href='https://www.instagram.com/' target={"_blank"} title="Go to Instagram Page"><img src='/assets/img/instagram.png' width={27} height={27} /></a></span>
                                    <span><a href='https://www.tripadvisor.com/' target={"_blank"} title="Go to Tripadvisor Page"><img src='/assets/img/social.png' width={30} height={30} /></a></span>
                                </div>
                            </div>
                        </> :
                        <>
                            <div className=''>
                                <p className='footerSecContent1'><strong>21'Cafe.</strong></p>
                                <p className='footerSecContent2'>JP Nagar, 1st Phase, Bangalore-76</p>
                                <p className='footerSecContent4'>MONDAY - FRIDAY <br /><span>6:00 AM TO 9:00 PM </span></p>
                                <p className='footerSecContent6'>SATURDAY - SUNDAY <br /><span>10:00 AM TO 8:00 PM</span></p>
                                <div className='mt30'>
                                <p className='footerSecContent7'>Contact: 91+ 8745667523</p>
                                <div className='footerSecContenticon'>
                                    <span><a href='https://www.facebook.com/' target={"_blank"} title="Go to Facebook Page"><img src='/assets/img/facebook.png' width={30} height={30} /></a></span>
                                    <span><a href='https://www.instagram.com/' target={"_blank"} title="Go to Instagram Page"><img src='/assets/img/instagram.png' width={27} height={27} /></a></span>
                                    <span><a href='https://www.tripadvisor.com/' target={"_blank"} title="Go to Tripadvisor Page"><img src='/assets/img/social.png' width={30} height={30} /></a></span>
                                </div>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}
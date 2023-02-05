import Header from '../header';
import Footer from '../footer';
import './bookTable.css';
import axios from 'axios';
import { useState,useEffect } from 'react';

export default function BookTable() {

    const [name, setName] = useState("")
    const [lastname, setLastName] = useState("")
    const [membercount, setMemberCount] = useState(0)
    const [phonenumber, setPhNum] = useState(0)
    const [email, setEmail] = useState("")
    const [message, setMsg] = useState("")
    const [submitFlag, setsubmitFlag] = useState(false)

    const bookTableSubmit = () => {
        // axios.post('http://localhost:3005/bookatable',{name:name,lastname:lastname,membercount:membercount,phonenumber:phonenumber,email:email,message:message}).then(() => {
        //     alert("success")
        //     setsubmitFlag(true)
        // })
        alert("Your submit is success, our team will reach you")
    }
    
    return (
        <>
            <Header />
            <section>
                <div className='formSection mt100'>
                    <form className='formEle' onSubmit={bookTableSubmit}>
                        <label>Name*</label>
                        <input type={"text"} name="name" required placeholder="Your name" onChange={(e) => { setName(e.target.value) }}></input>
                        <label>last Name</label>
                        <input type={"text"} name="lastname" placeholder="Your last name" onChange={(e) => { setLastName(e.target.value) }}></input>
                        <label>Member Count*</label>
                        <input type="number" name="membercount" min={1} max={30} required placeholder="Number of members" onChange={(e) => { setMemberCount(e.target.value) }}></input>
                        <label>Phone Number*</label>
                        <input type={"tel"} name="phonenumber" required pattern="[0-9]{10}" title="Enter your 10 digit phone number " placeholder="Your phone number" onChange={(e) => { setPhNum(e.target.value) }}></input>
                        <label>Email</label>
                        <input type={"email"} name="email" placeholder="Your email address"onChange={(e) => { setEmail(e.target.value) }}></input>
                        <label>Message</label>
                        <textarea type={"text"} name="message" placeholder="Enter your message" maxLength={300} onChange={(e) => { setMsg(e.target.value) }}></textarea>
                         {submitFlag && <div className='submitSuccessText'>Submit is success!</div>}
                        <button type='submit' className='formSubmit'>Submit</button>
                    </form>
                </div>
            </section>
            <section>
                <div className='bookSecondSec'>
                    <div className='bookSecondSecContent'><p>BE PART OF THE CHEWS FAMILY: WE’VE CELEBRATED OUR CUSTOMERS’ BIRTHDAYS, ENGAGEMENT PARTIES AND HEN DOS AT HERE 21'CAFE.</p></div>
                </div>
            </section>
            <Footer />
        </>
    );
}
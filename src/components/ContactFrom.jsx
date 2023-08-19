"use client"

import axios from "axios";

const ContactFrom = () => {

    const handelSubmit =  (e) => {
        e.preventDefault();
        const name = e.target.user_name.value;
        const email = e.target.user_email.value;
        const number = e.target.mobile_number.value;
        const message = e.target.message.value;
        const data = {
            name,
            email,
            message,
            number
        }
        if (name == "" || email == "" || message == "" || number == "") {
            alert("Please fill all the fields")
        }
        else {
           axios.post("api/contact",data)
           .then(res => console.log(res.data))
           .catch(err => console.log(err))

            alert("Your message has been sent successfully")
            e.target.user_name.value = "";
            e.target.user_email.value = "";
            e.target.mobile_number.value = "";
            e.target.message.value = "";
        }

    }


    return (
        <form onSubmit={handelSubmit}>
            <input type="text" name="user_name" id="" />
            <input type="email" name="user_email" id="" />
            <input type="text" name="mobile_number" id="" />
            <textarea name="message" id="" cols="30" rows="10"></textarea>
            <input type="submit" value="submit" />
        </form>
    );
};

export default ContactFrom;
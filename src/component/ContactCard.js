import React from "react";
import user from "../images/contact.png"
const ContactCard = (props) =>{
    const { id ,name, email , no} = props.contact;
    return(
        <div className="ui container">
           
        <div>
        <img className="image avatar ui" src={user} alt="user" />&nbsp;
        {name}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        {email}
        &nbsp;&nbsp;&nbsp;&nbsp;<i className="trash alternate icon outline"></i>
        <br />
        {no}
        </div><br />

       
      
</div>

    );   
};

export default ContactCard;
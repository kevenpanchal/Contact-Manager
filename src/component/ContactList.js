import React from "react";
import ContactCard from "./ContactCard";


const ContactList = (props) => {
    
    const renderlist = props.contacts.map((contact) => {
        return(
            <ContactCard contact={contact} key={contact.id} />
        
            );

    });
    return(
        <div>
             <h2>My Contact List</h2>
                    <div className="ui celled list">
                    {renderlist}
                    </div> 

        </div>
        );

}

export default ContactList;
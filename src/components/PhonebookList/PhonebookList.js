import React from "react";

const PhonebookList=({visibleContacts,deleteContact})=>{
    return(
        <ul>
        {visibleContacts.map(contact=>
          <li key={contact.id}>{contact.name}: {contact.number} <button type='button' onClick={()=>deleteContact(contact.id)}>Delete</button></li>
        )}
      </ul>
    )
}

export default PhonebookList
import React, { Component } from 'react';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import Filter from 'components/Filter/Filter';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    // name: '',
    // number: '',
  }

  // handleChange=(e)=>{
  //   this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  // }
  
  addNewContact=(items)=>{
    const {contacts}=this.state
    this.setState({contacts:[...this.state.contacts,{id:"id-"+(contacts.length+1),...items}]})
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  deleteContact=(contactId)=>{
    this.setState(prevState=>({
      contacts:prevState.contacts.filter(contact=>contact.id!==contactId)
    }))
  }

  render(){
    const visibleContacts=this.getVisibleContacts()

    return(
      <div>
        <h1>Phonebook</h1>
        <PhonebookForm onAddContact={this.addNewContact}/>
        <h2>Contacts</h2>
        {/* <label>
          Фильтр по имени
          <input type="text" value={this.state.filter} onChange={this.changeFilter} />
        </label> */}
        <Filter value={this.state.filter} onChange={this.changeFilter}/>
        <ul>
          {visibleContacts.map(contact=>
            <li key={contact.id}>{contact.name}: {contact.number} <button type='button' onClick={()=>this.deleteContact(contact.id)}>Delete</button></li>
          )}
        </ul>
      </div>
    )}
  
}

export default App;



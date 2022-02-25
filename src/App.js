import React, { Component } from 'react';
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
    name: '',
    number: '',
  }

  handleChange=(e)=>{
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }
  
  addNewContact=()=>{

  }

  render(){
    return(
      <div>
        <h2>Phonebook</h2>
        <form >
          <label >
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label >
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">
            Add contact
          </button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact=>
            <li key={contact.id}>{contact.name}: {contact.number} <button type='button'>Delete</button></li>
          )}
        </ul>
      </div>
    )}
  
}

export default App;



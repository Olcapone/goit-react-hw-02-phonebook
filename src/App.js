import { Component } from "react";
import shortid from "shortid";
//import PropTypes from "prop-types";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

class App extends Component {
  static defaultProps = {
    initContacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  };

  state = {
    contacts: this.props.initContacts,
    filter: this.props.initFilter,
    name: this.props.initName,
    number: this.props.initNumber,
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.state.contacts.map((contact) => {
      if (contact.name.includes(newContact.name)) {
        console.log("its contact already added");
        return this.state.contacts;
      }
    });

    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  findContact = (data) => {
    console.log(this.state.contacts.name);
    // if (this.state.contacts.name.includes(data)) {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts],
    }));
    //  }
  };

  formSubmitHandler = (data) => {
    //  if (contact.name.includes(data.name)) alert('contact added early');
    this.addContact(data);
  };

  changeFilter = (data) => {
    console.log(data);
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter onChange={this.findContact} />
        <ContactList date={this.state.contacts} />
      </>
    );
  }
}

export default App;

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
    initFilter: "",
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

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  findContact = () => {
    const { filter, contacts } = this.state;

    if (filter.length === 0) return contacts;

    // const normalizetext = filter.toLowerCase();

    return contacts.filter((contact) => contact.name.includes(filter));
  };

  formSubmitHandler = (data) => {
    this.addContact(data);
  };

  changeFilter = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  deleteContact() {}

  render() {
    const { contacts, filter } = this.state;

    let visibleContact = this.findContact();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          date={visibleContact}
          base={contacts}
          onDelete={this.deleteContact}
        />
      </>
    );
  }
}

export default App;

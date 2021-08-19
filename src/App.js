import { Component } from "react";
import shortid from "shortid";
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
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    const checkContact = contacts.find((contact) =>
      contact.name.includes(name)
    );
    if (checkContact) {
      alert("its contact already added");
    } else {
      this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }));
    }
  };

  findContact = () => {
    const { filter, contacts } = this.state;
    const normalizetext = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizetext)
    );
  };

  formSubmitHandler = (data) => {
    this.addContact(data);
  };

  changeFilter = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  deleteContact = (name) => {
    const { contacts } = this.state;

    this.setState({
      contacts: contacts.filter((contact) => contact.name !== name),
    });
  };

  render() {
    const { contacts, filter } = this.state;
    let visibleContact = filter.length === 0 ? contacts : this.findContact();

    return (
      <section className="mainSection">
        <h1 className="mainTitle">
          <span className="logo">P</span>honebook
        </h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2 className="mainTitle">Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList date={visibleContact} onDelete={this.deleteContact} />
      </section>
    );
  }
}

export default App;

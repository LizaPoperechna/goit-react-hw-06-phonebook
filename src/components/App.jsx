
//import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { H1, H2 } from "./App.styled";


export const App = () => {

  return (
        <div>
            <H1>Phonebook</H1>
            <ContactForm />

            <H2>Contacts</H2>
            <Filter />
            <ContactList />
              
        </div>)
  }
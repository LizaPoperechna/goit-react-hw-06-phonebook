import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List, P } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts, getFilter } from 'redux/contactSlice';


export const ContactList = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);


    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter))


    return (
        <>
            {filteredContacts.length <= 0 
            ? (<P>No contacts in Phonebook</P>) 
            : (<List>
                    {filteredContacts.map(({ id, name, number }) => {
                        return (
                        <ContactItem
                            key={id}
                            id={id}
                            name={name}
                            number={number}
                            onClick={() => dispatch(deleteContact(id))}
                        />
                        );
                    })}
                </List>)}
        </>
    )
}





ContactList.propTypes = {
    deleteContact: PropTypes.func,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  };
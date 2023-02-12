import PropTypes from 'prop-types';
import { Form, Input, Button } from './ContactForm.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from 'redux/contactSlice';
import { nanoid } from "nanoid";

export const ContactForm = () => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();


const onChange = e => {
    const {name, value} = e.currentTarget;

    switch (name) {
        case 'name': 
            setName(value);
            break;

        case 'number':
            setNumber(value);
            break;

        default:
            return;
        }   
    } 


    const formSubmit = e => {
        e.preventDefault();
        contacts.some(contact => contact.name === name)
            ? alert(`${name} is already in contacts.`)
            : dispatch(addContact({
                name,
                number,
                id: nanoid(),
            })
            )
        setName('');
        setNumber('');
        };

    return (
        <>
            <Form onSubmit={formSubmit}> 
                <label htmlFor="name">Name</label>
                    <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={onChange}
                        value={name}
                    />
                <label htmlFor="number">Number</label>
                    <Input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={onChange}
                        value={number}
                        />
                <Button type="submit">Add contact</Button>
            </Form>
        </>
    )
}

ContactForm.propTypes = {
    onChange: PropTypes.func,
    formSubmit: PropTypes.func,
}
import PropTypes from 'prop-types';
import { ButtonDel } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export const ContactItem = ({id, name, number }) => {

    const dispatch = useDispatch();

    return (
        <li>
            {name} : {number}
            <ButtonDel 
                type="button"
                onClick={() => {dispatch(deleteContact(id))}}>
                    Delete Contact
            </ButtonDel>
        </li>
    )
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}
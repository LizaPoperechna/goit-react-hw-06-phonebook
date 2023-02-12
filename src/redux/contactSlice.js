
import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';




export const contactSlice = createSlice({
    name: 'contacts',
    initialState: {    
            contacts: [ 
                { id: 'id-1', name: 'Rosie Simpson', number: '(096) 459-12-56' },
                { id: 'id-2', name: 'Hermione Kline', number: '(097) 443-89-12' },
                { id: 'id-3', name: 'Eden Clements', number: '(096) 645-17-79' },
                { id: 'id-4', name: 'Annie Copeland', number: '(050) 227-91-26' },
            ],
            filter: '',
        },
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload)},

        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)},

        filterContacts: (state, action) => {state.filter = action.payload},
    }
});


const persistConfig = {
    key: 'contacts',
    storage,
  }
 
export const contactsReducer = persistReducer(
    persistConfig, 
    contactSlice.reducer
);

export const {addContact, deleteContact, filterContacts} = contactSlice.actions;

// Selectors 

export const getFilter = state => state.contacts.filter;
export const getContacts = state => state.contacts.contacts;



import { createSlice } from '@reduxjs/toolkit'

const initialContacts = [
    { id: '4564', name: 'Vasya Pupkin', numberTel: '098564372' },
    { id: 'id-1', name: 'Rosie Simpson', numberTel: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', numberTel: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', numberTel: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', numberTel: '227-91-26' },
]

export const items = createSlice({
    name: 'items',
    initialState: initialContacts,
    reducers: {
      addContact(state, action) { state.push(action.payload) },
      deletedContact(state, action) { return state.filter(el => el.id !== action.payload) },
      apdateInitialContacts(_state, action){return action.payload }
    }
  });
  
  export const { addContact, deletedContact, apdateInitialContacts } = items.actions;
  
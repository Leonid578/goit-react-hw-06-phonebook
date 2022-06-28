import { configureStore } from '@reduxjs/toolkit'
import { items } from './sliceContacts'
import { filterContacts } from './sliceFilter'

export const store = configureStore({
    reducer: {
        items: items.reducer,
        filter: filterContacts.reducer,
    }
})
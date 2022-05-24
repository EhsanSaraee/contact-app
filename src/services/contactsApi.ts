import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Contact } from 'interfaces/Contact';

export const contactsApi = createApi({
   reducerPath: 'contactsApi',
   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
   endpoints: (builder) => ({
      getContacts: builder.query<Contact[], void>({
         query: () => '/contacts',
      }),
   }),
});

export const { useGetContactsQuery } = contactsApi;

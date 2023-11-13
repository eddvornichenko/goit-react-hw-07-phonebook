
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://655200f15c69a77903296793.mockapi.io';

const createContactAsyncThunk = (name, asyncFunction) =>
  createAsyncThunk(`contacts/${name}`, async (payload, thunkAPI) => {
    try {
      const response = await asyncFunction(payload);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

export const fetchContacts = createContactAsyncThunk('getContacts', () =>
  axios.get('/contacts')
);
export const addContact = createContactAsyncThunk('addContact', newContacts =>
  axios.post('/contacts', newContacts)
);
export const deleteContact = createContactAsyncThunk(
  'deleteContact',
  id => axios.delete(`/contacts/${id}`)
);
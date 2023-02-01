import axios from 'axios';

export const instanceContacts = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
  params: { _limit: 20 },
});

export const getContacts = async () => {
  const { data } = await instanceContacts.get('/contacts');
  return data;
};
export const addContact = async data => {
  const { data: result } = await instanceContacts.post('/contacts', data);

  return result;
};

export const removeContact = async id => {
  const { data } = await instanceContacts.delete(`/contacts/${id}`);
  return data;
};

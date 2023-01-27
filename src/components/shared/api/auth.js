import axios from 'axios';

export const instanceAuth = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const signUp = async body => {
  const { data } = await instanceAuth.post('/users/signup', body);
  return data;
};

export const logOut = async () => {
  const res = await instanceAuth.post('/users/logout');
  return res;
};

export const logIn = async body => {
  const { data } = await instanceAuth.post('/users/login', body);
  return data;
};

// export const addContact = async data => {
//   const { data: result } = await instanceContacts.post('/', data);

//   return result;
// };

// export const removeContact = async id => {
//   const { data } = await instanceContacts.delete(`/${id}`);
//   return data;
// };

import { ClientFunction } from 'testcafe';

// Setting mock users in local storage
export const setUsers = ClientFunction((users) => {
  window.localStorage.setItem('users', JSON.stringify(users));
});

// Setting mock loggedIn user in local storage
export const setLoggedInUser = ClientFunction((user) => {
  window.localStorage.setItem('user', JSON.stringify(user));
});

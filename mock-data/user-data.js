export const user = {
  firstName: 'Tom',
  lastName: 'Cruise',
  username: 'tom',
  id: 2,
  token: 'fake-jwt-token',
};

export const users = [
  {
    firstName: 'Mark',
    lastName: 'Zuckerberg',
    username: 'mark',
    password: 'mark123',
    id: 1,
  },
  {
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    id: user.id,
    password: 'tom456',
  },
];

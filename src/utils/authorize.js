import { getUser } from '../api/getUsers';

export const authorize = async (email, password) => {
  const db = await getUser();
  const user = db.members?.find((user) => user.email === email);
  if (user && user.password === password) {
    return true;
  }
  return false;
};

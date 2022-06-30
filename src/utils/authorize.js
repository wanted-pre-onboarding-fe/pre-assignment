import { getUser } from '../api/user';

export const authorize = async (email, password) => {
  const db = await getUser();
  const user = db.members?.find((user) => user.email === email);
  if (user && user.password === password) {
    return true;
  }
  return false;
};

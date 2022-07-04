import axios from 'axios';

export const getFeedsData = () => {
  return axios.get('http://localhost:3000/data/feedData.json').then((res) => {
    return res.data;
  });
};

export const getUserData = () => {
  return axios.get('http://localhost:3000/data/userData.json').then((res) => {
    return res.data;
  });
};

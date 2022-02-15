import axios from 'axios';

const get = (url = '') => {
  return axios({
    method: 'get',
    url
  });
};
const post = (url = '', data: any) => {
  return axios({
    method: 'post',
    url,
    data
  });
};
export const api = {
  get,
  post
};

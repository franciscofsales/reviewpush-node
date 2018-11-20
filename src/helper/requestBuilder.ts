import axios from 'axios';
import Auth from '../auth';

export default async (
  method: string = 'get',
  url: string,
  data: any = {},
  auth = false,
) => {
  let token;
  if (auth) {
    token = await Auth.getToken(false);
  }
  const options: {
    data?: any;
    params?: any;
    headers?: {
      Authorization: string;
    };
  } = {};
  if (data) {
    options[method === 'get' ? 'params' : 'data'] = data;
  }
  if (auth) {
    options.headers = {
      Authorization: `Bearer ${token}`,
    };
  }
  return await axios.request({
    method,
    url,
    ...options,
  });
};

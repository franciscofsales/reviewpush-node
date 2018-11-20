import to from 'await-to-js';
import axios from 'axios';
import { get } from 'lodash';
import config from './config';

class Auth {
  private email: string | null;
  private password: string | null;
  private token: string | null;

  constructor(props?: { email?: string; password?: string }) {
    this.email = (props && props.email) || config.email;
    this.password = (props && props.password) || config.password;
    this.token = null;
  }

  public getToken = async (force: boolean | undefined) => {
    if (this.token && !force) {
      return this.token;
    }
    const [err, token] = await to(this.auth());
    if (err) {
      throw err;
    }
    return token;
  }

  public setCredentials = (email: string, password: string) => {
    this.email = email;
    this.password = password;
  }

  private auth = async () => {
    const [err, res] = await to(
      axios.post('https://dashboard.reviewpush.com/api/user/authenticate', {
        email: this.email,
        password: this.password,
      }),
    );
    const token = get(res, 'data.token');
    if (err) {
      throw err;
    } else if (!token) {
      throw new Error('Missing auth response');
    }
    this.token = token;
    return token;
  }
}

export default new Auth();

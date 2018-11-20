import to from 'await-to-js';
import axios from 'axios';
import Auth from './auth';
import { Response, ReviewGet, ReviewSentiment } from './types';

class Reviews {
  public get = async (props: ReviewGet = {}) => {
    const [err, token]: Response = await to(Auth.getToken(false));
    if (err) {
      throw err;
    }
    const params: any = {};
    Object.keys(props).forEach((propKey: any) => {
      if (propKey) {
        Object.keys(props.metadata || {}).forEach((key: any) => {
          params[`metadata[${key}]`] = props.metadata
            ? props.metadata[key]
            : null;
        });
      }
      if (props[propKey]) {
        params[propKey] = props[propKey];
      }
    });

    const [error, res]: Response = await to(
      axios.get('https://dashboard.reviewpush.com/api/user/reviews', {
        params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    );

    if (error) {
      throw error;
    }
    return res && res.data;
  }

  public getSentiment = async (props: ReviewSentiment = {}) => {
    const [err, token]: Response = await to(Auth.getToken(false));
    if (err) {
      throw err;
    }
    const [error, res]: Response = await to(
      axios.get(
        'https://dashboard.reviewpush.com/api/user/locations/review/sentiment',
        {
          params: props,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      ),
    );
    if (error) {
      throw error;
    }
    return res && res.data;
  }
}

export default new Reviews();

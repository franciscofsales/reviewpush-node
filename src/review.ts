import to from 'await-to-js';
import requestBuilder from './helper/requestBuilder';
import { Response, ReviewGet } from './types';

class Reviews {
  public get = async (props: ReviewGet = {}) => {
    const params: any = {};
    Object.keys(props).forEach((propKey: any) => {
      if (propKey === 'metadata') {
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
      requestBuilder(
        'get',
        'https://dashboard.reviewpush.com/api/user/reviews',
        params,
        true,
      ),
    );

    if (error) {
      throw error;
    }
    return res && res.data;
  };
}

export default new Reviews();

import to from 'await-to-js';
import requestBuilder from './helper/requestBuilder';
import { Response, ReviewSentiment } from './types';

class Location {
  public get = async (props: { id: string; profiles: boolean }) => {
    const params: any = {};
    if (props.profiles) {
      params.include = 'profiles';
    }

    const [error, res]: Response = await to(
      requestBuilder(
        'get',
        `https://dashboard.reviewpush.com/api/user/locations/${props.id}`,
        params,
        true,
      ),
    );

    if (error) {
      throw error;
    }
    return res && res.data;
  }

  public byRating = async (props: { location_id?: string } = {}) => {
    const [error, res]: Response = await to(
      requestBuilder(
        'get',
        'https://dashboard.reviewpush.com/api/user/locations/ratings',
        props,
        true,
      ),
    );
    if (error) {
      throw error;
    }
    return res && res.data;
  }

  public getSentiment = async (props: ReviewSentiment = {}) => {
    const [error, res]: Response = await to(
      requestBuilder(
        'get',
        'https://dashboard.reviewpush.com/api/user/locations/review/sentiment',
        props,
        true,
      ),
    );
    if (error) {
      throw error;
    }
    return res && res.data;
  }
}

export default new Location();

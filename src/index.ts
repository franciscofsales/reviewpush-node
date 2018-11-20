import Auth from './auth';
import Locations from './location';
import Reviews from './review';

export default class ReviewPush {
  public Reviews: typeof Reviews;
  public Locations: typeof Locations;
  constructor(props: { email: string; password: string }) {
    if (!props || !props.email || !props.password) {
      throw new Error('Invalid or missing credentials');
    }
    Auth.setCredentials(props.email, props.password);
    this.Reviews = Reviews;
    this.Locations = Locations;
  }
}

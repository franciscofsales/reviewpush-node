import Auth from './auth';
import Location from './location';
import Reviews from './review';

export default class ReviewPush {
  public Reviews: typeof Reviews;
  public Location: typeof Location;
  constructor(props: { email: string; password: string }) {
    if (!props || !props.email || !props.password) {
      throw new Error('Invalid or missing credentials');
    }
    Auth.setCredentials(props.email, props.password);
    this.Reviews = Reviews;
    this.Location = Location;
  }
}

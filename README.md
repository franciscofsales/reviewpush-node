# reviewpush-node

Wrapper for the [ReviewPush](https://www.reviewpush.com/) REST Api.

**This library is still alpha. Use at your own risk**

## Index

- [Install](#install)
- [Usage](#usage)
- [License](#license)

## Install

```bash
yarn add reviewpush-node
```

To use `reviewpush-node` you need a valid Email and Password combination from ReviewPush.

```js
import reviewpush from 'reviewpush-node';

const auth = {
  email: "john@doe.com",
  password: "password",
};

const ReviewPush = new reviewpush(auth);
```

## Usage

### Reviews

### Review GET

Get reviews for a location or generic, during a period.

```js
ReviewPush.Reviews.get(options);
```

Options:

- `location_id` - Filter by a location ID
- `location_profile_id` - Filter by a location profile ID
- `limit` - Set the number of reviews per page
- `added_since` - Only return reviews added since a certain date/time
- `added_before` - Only return reviews added before a certain date/time
- `review_text` - Specify `empty` to return only reviews with no text, `notempty` to return only reviews with text, or leave blank for all reviews
- `metadata` - view [Official docs](https://developer.reviewpush.com/REST_API/User_API/Reviews.html) for info

If no period is set, it defaults to the last 30 days.

For a detailed list of options, please visit <https://developer.reviewpush.com/REST_API/User_API/Reviews.html>.

### Location

### Location GET

Gets location information

```js
ReviewPush.Location.get(options);
```

Options:

- `id` - location id
- `profiles` - include profiles: `true`, `false`: default is false

For a detailed list of options, please visit <https://developer.reviewpush.com/REST_API/User_API/Locations.html>.

### Locations By Rating

Gets locations information by rating

```js
ReviewPush.Location.byRating(options);
```

Options:

- `location_id` - filter by location id

For a detailed list of options, please visit <https://developer.reviewpush.com/REST_API/User_API/Locations.html>.

### Location Sentiment

Gets locations sentiment

```js
ReviewPush.Location.getSentiment(options);
```

Options:

- `location_id` - filter by location id
- `date_from` - date from (default to 30 day from today)
- `date_to` - date to (default to now)

For a detailed list of options, please visit <https://developer.reviewpush.com/REST_API/User_API/Locations.html>.

## License

[MIT License][license-url]

[license-url]: LICENSE

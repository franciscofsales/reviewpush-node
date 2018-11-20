const $ = process.env;

export default {
  email: $.REVIEWPUSH_EMAIL || '',
  password: $.REVIEWPUSH_PASSWORD || '',
};

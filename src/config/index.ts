export default {
  APP_API: process.env.APP_API ?? '',
  JWT_KEY: process.env.JWT_KEY ?? '',
  MASTER_KEY: process.env.MASTER_KEY ?? '',
  FACEBOOK_ID: process.env.FACEBOOK_ID ?? '',
  GOOGLE_CLIENT_ID: {
    ANDROID: process.env.GOOGLE_CLIENT_ID_ANDROID ?? '',
    IOS: process.env.GOOGLE_CLIENT_ID_IOS ?? '',
  },
};

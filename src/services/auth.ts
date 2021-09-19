import config from 'config';

export function signIn() {
  return new Promise((resolve) => {
    console.log(config.APP_API, config.JWT_KEY);
    setTimeout(() => {
      resolve({
        token: 'jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3',
        data: { name: 'Thiago', email: 'thiagomarinho@rockeseat.com.br' },
      });
    }, 2000);
  });
}

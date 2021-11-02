import { AppAPI, handleHttpError } from 'common/libs/axios';

import {} from 'common/constants/types';

export class WikiService {
  constructor() {}

  async getListOfItems(token: string | null): Promise<void> {
    if (token) {
      await AppAPI.get('/wiki', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((data) => {
          console.log(data.data);
        })
        .catch(handleHttpError);
    }
  }
}

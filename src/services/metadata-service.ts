import { AppAPI, handleHttpError } from 'common/libs/axios';

import {} from 'common/constants/types';

export class MetadataService {
  constructor() {}

  async getMetadataList(token: string | null): Promise<void> {
    if (token) {
      await AppAPI.get('/metadata', {
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

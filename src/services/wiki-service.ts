import { AppAPI, handleHttpError } from 'common/libs/axios';

import { WikiData, WikiFullItem } from 'common/constants/types';

export class WikiService {
  constructor() {}

  async getWikiData(token: string | null): Promise<WikiData | void> {
    if (token) {
      try {
        return AppAPI.get('/wiki', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((response) => response.data as WikiData);
      } catch (error) {
        handleHttpError(error);
      }
    }
  }

  async getWikiItem(token: string | null, wikiItemId: string): Promise<WikiFullItem | void> {
    if (token) {
      try {
        return AppAPI.get(`/wiki/${wikiItemId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((response) => response.data as WikiFullItem);
      } catch (error) {
        handleHttpError(error);
      }
    }
  }
}

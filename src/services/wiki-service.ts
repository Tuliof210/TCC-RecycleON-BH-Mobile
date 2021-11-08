import { AppAPI, handleHttpError } from 'common/libs/axios';

import { WikiData, WikiFullItem } from 'common/constants/types';

export class WikiService {
  constructor(private readonly setWikiData: React.Dispatch<React.SetStateAction<WikiData>>) {}

  async getWikiData(token: string | null): Promise<WikiData | void> {
    if (token) {
      try {
        await AppAPI.get('/wiki', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((response) => {
          this.setWikiData(response.data.list as WikiData);
        });
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

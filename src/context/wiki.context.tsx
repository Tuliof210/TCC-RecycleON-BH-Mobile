import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

import { WikiData, WikiFullItem } from 'common/constants/types';

import { AuthContext } from 'context/auth.context';
import { WikiService } from 'services';

interface WikiContextData {
  wikiData: WikiData;
  getWikiItem(wikiItemId: string): Promise<WikiFullItem | void>;
}

export const WikiContext = createContext<WikiContextData>({} as WikiContextData);

export function WikiProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const { token } = useContext(AuthContext);
  const [wikiData, setWikiData] = useState<WikiData>([]);

  const wikiService: WikiService = new WikiService(setWikiData);
  useEffect(() => {
    (async () => {
      await wikiService.getWikiData(token);
    })();
  }, []);

  const getWikiItem = useCallback(async (wikiItemId: string) => {
    return wikiService.getWikiItem(token, wikiItemId);
  }, []);

  return <WikiContext.Provider value={{ wikiData, getWikiItem }}>{children}</WikiContext.Provider>;
}

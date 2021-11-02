import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

import { WikiData, WikiFullItem } from 'common/constants/types';

import { AuthContext } from 'context/auth.context';
import { WikiService } from 'services';

interface WikiContextData {
  getWikiData(): Promise<WikiData>;
  getWikiItem(wikiItemId: string): Promise<WikiFullItem | void>;
}

export const WikiContext = createContext<WikiContextData>({} as WikiContextData);

export function WikiProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const { token } = useContext(AuthContext);

  const wikiService: WikiService = new WikiService();

  const getWikiData = useCallback(async () => {
    const wikiData = await wikiService.getWikiData(token);
    return wikiData ? wikiData : [];
  }, []);

  const getWikiItem = useCallback(async (wikiItemId: string) => {
    return wikiService.getWikiItem(token, wikiItemId);
  }, []);

  return <WikiContext.Provider value={{ getWikiData, getWikiItem }}>{children}</WikiContext.Provider>;
}

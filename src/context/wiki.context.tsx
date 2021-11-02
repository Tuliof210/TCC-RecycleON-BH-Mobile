import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

import { AuthContext } from 'context/auth.context';
import { WikiService } from 'services';

interface WikiContextData {
  getListOfItems(): Promise<void>;
}

export const WikiContext = createContext<WikiContextData>({} as WikiContextData);

export function WikiProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const { token } = useContext(AuthContext);

  const wikiService: WikiService = new WikiService();

  const getListOfItems = useCallback(async () => {
    await wikiService.getListOfItems(token);
  }, []);

  useEffect(() => {
    (async () => {
      await getListOfItems();
    })();
  }, []);

  return <WikiContext.Provider value={{ getListOfItems }}>{children}</WikiContext.Provider>;
}

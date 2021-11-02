import React, { createContext, useCallback, useContext, useState } from 'react';

import { AuthContext } from 'context/auth.context';
import { MetadataService } from 'services';

interface MetadataContextData {
  getMetadataList(): Promise<void>;
}

export const MetadataContext = createContext<MetadataContextData>({} as MetadataContextData);

export function MetadataProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const { token } = useContext(AuthContext);

  const metadataService: MetadataService = new MetadataService();

  const getMetadataList = useCallback(async () => {
    await metadataService.getMetadataList(token);
  }, []);

  return <MetadataContext.Provider value={{ getMetadataList }}>{children}</MetadataContext.Provider>;
}

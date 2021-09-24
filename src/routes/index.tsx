import React, { useContext } from 'react';

import { AuthContext } from 'context';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { colors } from 'common/constants/colors';

export function Routes(): JSX.Element {
  const { signed } = useContext(AuthContext);
  const defaultScreenOptions = { headerShown: false, contentStyle: { backgroundColor: colors('white') } };

  return signed ? (
    <AppRoutes screenOptions={defaultScreenOptions} />
  ) : (
    <AuthRoutes screenOptions={defaultScreenOptions} />
  );
}

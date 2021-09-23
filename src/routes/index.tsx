import React, { useContext } from 'react';

import AuthContext from 'context/auth.context';

import { colors } from 'common/constants/colors';

import AuthRoutes from '../routes/auth.routes';
import AppRoutes from '../routes/app.routes';

const Routes = () => {
  const { signed } = useContext(AuthContext);
  const defaultScreenOptions = { headerShown: false, contentStyle: { backgroundColor: colors('white') } };

  return !signed ? (
    <AppRoutes screenOptions={defaultScreenOptions} />
  ) : (
    <AuthRoutes screenOptions={defaultScreenOptions} />
  );
};

export default Routes;

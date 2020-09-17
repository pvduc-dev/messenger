import React, { FunctionComponent } from 'react';

const Image = React.lazy(() => import('@/components/Home'))

const Login: FunctionComponent = () => (
  <Image/>
);

export default Login;

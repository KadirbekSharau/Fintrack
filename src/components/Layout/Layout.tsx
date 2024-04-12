import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return <div style={{ margin: 'auto', maxWidth: '500px' }}>{children}</div>;
};

export default Layout;
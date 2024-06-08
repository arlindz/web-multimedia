import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter: React.FC = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      My E-commerce Website ©2024 Created by Your Name
    </Footer>
  );
};

export default AppFooter;

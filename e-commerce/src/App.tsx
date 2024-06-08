import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Navbar from './Layouts/Navbar';
import AppFooter from './Layouts/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Navbar />
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-content" style={{ padding: 24, minHeight: 380 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Content>
        <AppFooter />
      </Layout>
    </Router>
  );
};

export default App;

import React from 'react';
import { Layout, Row, Col, Card, Typography } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

const Home: React.FC = () => {
  return (
    <Content style={{ padding: '50px' }}>
      <Title level={2} style={{ textAlign: 'center' }}>
        Welcome to Our E-commerce Site
      </Title>
      <Row gutter={[16, 16]} justify="center" style={{marginTop:"100px"}}>
        <Col span={8}>
          <Card
            hoverable
            cover={<img alt="example" src="https://placeimg.com/640/480/tech" />}
          >
            <Card.Meta title="Product 1" description="This is the description" />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            cover={<img alt="example" src="https://placeimg.com/640/480/nature" />}
          >
            <Card.Meta title="Product 2" description="This is the description" />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            cover={<img alt="example" src="https://placeimg.com/640/480/arch" />}
          >
            <Card.Meta title="Product 3" description="This is the description" />
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default Home;

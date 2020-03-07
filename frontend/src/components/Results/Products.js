import React from "react";
import { Typography, Card, Row, Col } from "antd";

const { Meta } = Card;
const { Text } = Typography;

const generateCard = () => {
  return (
    <Card
      hoverable
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
      <Text>$100.00</Text>
    </Card>
  );
};

const generateGrid = (perRow, amount) => {
  return (
    <Row justify="space-around" gutter={32}>
      {[...Array(perRow)].map(() => {
        return <Col span={6}>{generateCard()} </Col>;
      })}
    </Row>
  );
};

class Products extends React.Component {
  render() {
    return <div>{generateGrid(4, 5)}</div>;
  }
}

export default Products;

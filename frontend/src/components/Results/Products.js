import React from "react";
import { Typography, Card, Row, Col} from "antd";


const { Meta } = Card;
const { Text } = Typography;

const generateCard = (product) => {
  return (
    <Card
      hoverable
      onClick={()=> window.location.href=product["ProductUrl"]}
      cover={
        <img
          alt={product["ProductName"]}
          src={product["MainImageUrl"]}
        />
      }
    >
      <Meta title={product["BrandName"]} description={product["ProductName"]} size={product["size"]} />
      <Text>{product["PriceInEuros"]}</Text>
    </Card>
  );
};

const generateGrid = (products) => {
  return (
    <Row gutter={[32,48]}>
      {products.map((product) => {
        return <Col span={6}>{generateCard(product)} </Col>;
      })}
    </Row>
  );
};

class Products extends React.Component {
  render() {
  // console.log(this.props.products);
    return <div>{generateGrid(this.props.products)}</div>;
  }
}

export default Products;

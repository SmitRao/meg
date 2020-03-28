import React from "react";
import { Typography, Card, Row, Col} from "antd";
import Price from "../Price/Price";


const { Meta } = Card;
const { Text } = Typography;

const generateCard = (product) => {
  return (
    <Card
      hoverable
      onClick={()=> window.location.href= "http://www.instagram.com"}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
      {/*TODO: replace curr with currency to display, product_curr from product info*/}
      <Price product_value={product['price']} product_curr={'USD'} curr={'CNY'}/>
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

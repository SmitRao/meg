import React from "react";
import { Typography, Card, Row, Col} from "antd";
import Price from "./Price";


const { Meta } = Card;
const { Text } = Typography;

const generateCard = (product, curr) => {
  const currency = (curr === "curr") ? product["Currency"] : curr;
  console.log("generate car", currency);
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
      <Meta title={product["BrandName"]} description={product["ProductName"]} />
      {/*TODO: replace currency with currency to display, product_currency from product info*/}
      <Price product_value={product["PriceInEuros"]} product_currency={product["Currency"]} currency={currency}/>
      {/* <Text>{product["PriceInEuros"]}</Text> */}
    </Card>
  );
};

const generateGrid = (products, currency) => {
  return (
    <Row gutter={[32,48]}>
      {products.map((product) => {
        return <Col span={6}>{generateCard(product, currency)} </Col>;
      })}
    </Row>
  );
};

class Products extends React.Component {
  render() {
  console.log(this.props.currency);
    return <div>{generateGrid(this.props.products, this.props.currency)}</div>;
  }
}

export default Products;

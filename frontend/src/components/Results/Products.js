import React from "react";
import { Typography, Card, Row, Col} from "antd";
import Price from "../Price/Price";

/*Available currencies: verify in ExchangeRatesToCAD.js
  "CAD","AUD","BRL","CNY","EUR","HKD","INR",
  "IDR","JPY","MYR","MXN","NZD","NOK","PEN",
  "RUB","SAR","SGD","ZAR","KRW","SEK","CHF",
  "TWD","THB","TRY","GBP","USD","VND"
*/


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
      {/*TODO: replace currency with currency to display, product_currency from product info*/}
      <Price product_value={product['price']} product_currency={'USD'} currency={'GBP'}/>
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

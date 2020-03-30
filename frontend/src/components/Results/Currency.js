import React from "react";
import { Select, Typography, Row, Col } from "antd";

/*Available currencies: verify in ExchangeRatesToCAD.js
  "CAD","AUD","BRL","CNY","EUR","HKD","INR",
  "IDR","JPY","MYR","MXN","NZD","NOK","PEN",
  "RUB","SAR","SGD","ZAR","KRW","SEK","CHF",
  "TWD","THB","TRY","GBP","USD","VND"
*/

const { Text } = Typography;
const { Option } = Select;

class Currency extends React.Component {
  render() {
    return (
      <Row gutter={16} align="middle">
      <Col>
        <Text>Currency</Text>
      </Col>
      <Col>
        <Select
            defaultValue="curr"
            style={{ width: 140 }}
            label="currency"
            onChange={this.props.onChange}
        >
          <Option value="curr">Listed Currency</Option>
          <Option value="USD">USD</Option>
          <Option value="CAD">CAD</Option>
          <Option value="GBP">GBP</Option>
          <Option value="EUR">EUR</Option>
          <Option value="AUD">AUD</Option>
          <Option value="CNY">CNY</Option>
        </Select>
      </Col>
      </Row>
    );
  }
}

export default Currency;

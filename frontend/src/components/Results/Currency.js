import React from "react";
import { Select, Typography, Row, Col } from "antd";

const { Text } = Typography;
const { Option } = Select;

class Currency extends React.Component {
  render() {
    return (
      <Row gutter={16} align="middle">
      <Col>
        <Text>Sort By</Text>
      </Col>
      <Col>
        <Select defaultValue="htl" style={{ width: 60 }} label="Sort By" onChange={this.props.onChange}>
          <Option value="USD">USD</Option>
          <Option value="CAD">CAD</Option>
          <Option value="GBP">GBP</Option>
          <Option value="CNY">CNY</Option>
        </Select>
      </Col>
      </Row>
    );
  }
}

export default Currency;

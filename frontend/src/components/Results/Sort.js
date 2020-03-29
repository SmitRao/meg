import React from "react";
import { Select, Typography, Row, Col } from "antd";

const { Text } = Typography;
const { Option } = Select;

class Sort extends React.Component {
  render() {
    return (
      <Row gutter={16} align="middle">
      <Col>
        <Text>Sort By</Text>
      </Col>
      <Col>
        <Select defaultValue="htl" style={{ width: 160 }} label="Sort By" onChange={this.props.onChange}>
          <Option value="htl">Price High To Low</Option>
          <Option value="lth">Price Low to High</Option>
        </Select>
      </Col>
      </Row>
    );
  }
}

export default Sort;

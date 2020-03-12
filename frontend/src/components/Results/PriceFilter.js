import React from "react";
import { Input, Button, Row, Col } from "antd";

const InputGroup = Input.Group;

class PriceFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {min: 0, max: 0};

    this.handleMinChange = this.handleMinChange.bind(this);
    this.handleMaxChange = this.handleMaxChange.bind(this);
    this.getMinMax = this.getMinMax.bind(this);
  }

  handleMinChange(event) {
    this.setState({min: event.target.value});
  }

  handleMaxChange(event) {
    this.setState({max: event.target.value});
  }

  getMinMax() {
    this.props.onSet(this.state);
  }

  render() {
    return (
      <InputGroup size="small" className={this.props.className}>
        <Row justify="center" gutter={8}>
          <Col span={7}>
            <Input placeholder="MIN" onChange={this.handleMinChange} maxLength={4} />
          </Col>
          <Col span={7}>
            <Input placeholder="MAX" onChange={this.handleMaxChange} maxLength={4} />
          </Col>
          <Col span={4}>
            <Button size="small" onClick={this.getMinMax}>SET</Button>
          </Col>
        </Row>
      </InputGroup>
    );
  }
}

export default PriceFilter;

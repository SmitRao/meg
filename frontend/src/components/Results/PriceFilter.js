import React from "react";
import { Input, Button, Row, Col } from "antd";
import {convertValuetoCurr} from "./Price";

const InputGroup = Input.Group;

class PriceFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {min: 0, max: 0};

    this.handleMinChange = this.handleMinChange.bind(this);
    this.handleMaxChange = this.handleMaxChange.bind(this);
    this.getMinMax = this.getMinMax.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.clear && prevProps.clear!==this.props.clear) {
      this.setState({min: 0, max: 0})
    }
    if (this.props.currency !== prevProps.currency) {
      this.setState({
        min: convertValuetoCurr(this.state.min, prevProps.currency, this.props.currency),
        max: convertValuetoCurr(this.state.max, prevProps.currency, this.props.currency)
      });
    }
  }

  handleMinChange(event) {
      let value = parseFloat(event.target.value);
      if (Number.isNaN(value)) {
        value = 0;
      }
    // console.log("handleMinChange", this.props.currency, event.target.value, "USD", convertedMinVal)
      this.setState({min: value});
  }

  handleMaxChange(event) {
    let value = parseFloat(event.target.value);
    if (Number.isNaN(value)) {
      value = 0;
    }
    // console.log("handleMaxChange", this.props.currency, event.target.value, "USD", convertedMaxVal)
    this.setState({max: value});
  }

  getMinMax() {
    let values = {
      min: convertValuetoCurr(this.state.min, this.props.currency, "USD"), 
      max: convertValuetoCurr(this.state.max, this.props.currency, "USD")
    }
    this.props.onSet(values);
  }

  render() {
    const minValue = this.state.min === 0 ? "" : this.state.min; 
    const maxValue = this.state.max === 0 ? "" : this.state.max;
    return (
      <InputGroup size="small" className={this.props.className}>
        <Row justify="center" gutter={8}>
          <Col span={7}>
            <Input placeholder="MIN" onChange={this.handleMinChange} id="minInput" maxLength={4} value={minValue}/>
          </Col>
          <Col span={7}>
            <Input placeholder="MAX" onChange={this.handleMaxChange} id="maxInput" maxLength={4} value={maxValue}/>
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

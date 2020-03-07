import React from "react";
import { Input, Typography, Button, Row, Col } from "antd";

const { Text } = Typography;
const InputGroup = Input.Group;


class PriceFilter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<InputGroup size="small">
			<Row justify="center" gutter={8}>
			<Col span={7}>
				<Input placeholder="MIN" maxLength={4}/>
			</Col>
			<Col span={7}>
				<Input placeholder="MAX" maxLength={4}/>
			</Col>
			<Col span={4}>
				<Button size="small">SET</Button>
			</Col>
			</Row>
			</InputGroup>
			)
	}
}



export default PriceFilter
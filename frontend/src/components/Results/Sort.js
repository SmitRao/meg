import React from "react";
import { Select, Typography } from "antd";

const { Text } = Typography;
const { Option } = Select;

class Sort extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
			<Text strong>Sort By</Text>
        	<Select defaultValue="htl" style={{ width: 160 }} label="Sort By">
        		<Option value="htl">Price High To Low</Option>
        		<Option value="lth">Low to High</Option>
					</Select>
			</div>
			)
	}
}

export default Sort
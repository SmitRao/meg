// Pricing component with currency conversion

import React from "react";
import {Typography} from "antd";

const {Text} = Typography;

class Price extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curr: this.props
        }
    }

    convertValueByCurrency = (product_value, product_curr) => {
        const rate = 0.90; // 0.90 is euro conversion
        const val = product_value * rate;
        // console.log(product_value, product_curr, val, this.state.curr);
        return product_value * rate
    };

    render() {
        const {product_value, product_curr} = this.props;
        const {curr} = this.state;
        const value = this.convertValueByCurrency( product_value, product_curr);

        return <Text>{value} {curr}</Text>
    }
}

export default Price;
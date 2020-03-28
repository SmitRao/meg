// Pricing component with currency conversion

import React from "react";
import {Typography} from "antd";

const {Text} = Typography;

const exchangeRates = require('./ExchangeRatesToCAD');

class Price extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curr: this.validateCurrency(this.props.curr) ? this.props.curr : "USD",
            currRate: this.getRate(this.props.curr)
        }
    }

    // check valid currency we can convert
    validateCurrency = (curr) => {
        // console.log("validateCurrency", curr, curr in exchangeRates);
        return curr in exchangeRates
    };

    // get exchange rate of curr to CAD
    getRate = (curr) => {
        if (this.validateCurrency(curr)) {
            return exchangeRates[curr]
        }
        return exchangeRates["USD"]
    };

    // convert from value to the required currency
    convertValuetoCurr = (value, curr) => {
        // TODO: this method will only give an approximation!!!

        const toCADRate = this.getRate(curr);
        const conv = value * toCADRate / this.state.currRate;

        // console.log(value, curr, conv, this.state.curr);
        return conv.toFixed(2);
    };

    render() {
        const {product_value, product_curr} = this.props;
        const curr = this.state.curr;
        const value = this.convertValuetoCurr( product_value, product_curr);

        return <Text>{value} {curr}</Text>
    }
}

export default Price;
// Pricing component with currency conversion

import React from "react";
import {Typography} from "antd";

const {Text} = Typography;

const exchangeRates = require('./ExchangeRatesToCAD');

// check valid currency we can convert
export const validateCurrency = (curr) => {
    // console.log("validateCurrency", curr, curr in exchangeRates);
    return curr in exchangeRates
};

// get exchange rate of curr to CAD
export const getRate = (curr) => {
    if (validateCurrency(curr)) {
        return exchangeRates[curr]
    }
    return exchangeRates["USD"]
};

// convert from value to the required currency
export const convertValuetoCurr = (value, fromCurr, toCurr) => {
    // NOTE: this method will only give an approximation!!!

    const toCADRate = getRate(fromCurr);
    const conv = value * toCADRate / getRate(toCurr);

    // returns number as a string rounded to nearest whole number
    return conv.toFixed(0);
};



class Price extends React.Component {

    render() {
        const {product_value, product_currency, currency} = this.props;
        const curr = exchangeRates["CURRENCIES"][currency];
        const value = convertValuetoCurr( product_value, product_currency, currency);

        return <Text>{curr}{value}</Text>
    }
}

export default Price;
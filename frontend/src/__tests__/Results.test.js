import TestRenderer from 'react-test-renderer';
import PriceFilter from '../components/Results/PriceFilter';
import Products from '../components/Results/Products';
import Sort from '../components/Results/Sort';
import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';


/*
it ('checks the price filter component', () => {
    const price = TestRenderer.create(<PriceFilter />);
    expect(price).toMatchSnapshot();
});

it ('checks the products component', () => {
    const prod = TestRenderer.create(<Products />);
    expect(prod).toMatchSnapshot();
});
*/
it ('checks the sort component', () => {
    const s = TestRenderer.create(<Sort />);
    expect(s).toMatchSnapshot();
});
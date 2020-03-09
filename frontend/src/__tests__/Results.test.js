import TestRenderer from 'react-test-renderer';
import PriceFilter from '../components/Results/PriceFilter';
import Products from '../components/Results/Products';
import Sort from '../components/Results/Sort';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure} from 'enzyme';
configure({adapter: new Adapter()});


describe('Testing Results components', () => {
    it('price filter component check', () => {
      const component = shallow(<PriceFilter/>);
      expect(component).toMatchSnapshot();
    });
    
    it('products component check', () => {
        const component = shallow(<Products/>);
      expect(component).toMatchSnapshot();
    })
  });
  
it ('checks the sort component', () => {
    const s = TestRenderer.create(<Sort />);
    expect(s).toMatchSnapshot();
});
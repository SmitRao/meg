import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import TestRenderer from 'react-test-renderer';
import Navbar from '../components/Navbar/Navbar';
import MegFooter from '../components/MegFooter/MegFooter';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure} from 'enzyme';
configure({adapter: new Adapter()});


describe('testing Navbar', () => {
    it('should render correctly', () => {
      const component = shallow(<Navbar/>);
      expect(component).toMatchSnapshot();
    });
  });

  
it('testing footer component', () => {
    const foot = TestRenderer.create(<MegFooter />);
    expect(foot).toMatchSnapshot();
});
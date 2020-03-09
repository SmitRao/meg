import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import Home from '../screens/Home/Home';
import HowItWorks from '../screens/HowItWorks/HowItWorks';
import Results from '../screens/Results/Results';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure} from 'enzyme';
configure({adapter: new Adapter()});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

describe('testing splash page screen', () => {
    it('should render correctly', () => {
        const component = shallow(<Home />);
        expect(component).toMatchSnapshot();
    });
});

describe('testing HowItWorks screen', () => {
    it('should render correctly', () => {
      const component = shallow(<HowItWorks/>);
      expect(component).toMatchSnapshot();
    });
  });

describe('testing Results screen', () => {
    it('should render correctly', () => {
        const component = shallow(<Results/>);
        expect(component).toMatchSnapshot();
    });
});

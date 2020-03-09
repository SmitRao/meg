import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import App from '../App';
import Home from '../screens/Home/Home';
import HowItWorks from '../screens/HowItWorks/HowItWorks';
import Results from '../screens/Results/Results';
import Navbar from '../components/Navbar/Navbar';
import MegFooter from '../components/MegFooter/MegFooter';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure} from 'enzyme';
configure({adapter: new Adapter()});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

it('home page renders welcome message', () => {
    const { getByText } = render(<App />);
    expect(getByText('Finding ethically')).toBeInTheDocument();
});

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

it('renders the expected screen for the splash page', () => {
    const home_screen = TestRenderer.create(Home).toJSON();
    expect(home_screen).toMatchSnapshot();
});

it('renders the expected screen for the How it Works page', () => {
    const hiw = TestRenderer.create(HowItWorks).toJSON();
    expect(hiw).toMatchSnapshot();
});

it('renders the expected screen for the results page', () =>{
    const results_screen = TestRenderer.create(Results).toJSON();
    expect(results_screen).toMatchSnapshot();

});

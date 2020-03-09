import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, renderer } from '@testing-library/react';
import App from './App';
import 'jest-enzyme';
import { ReactComponent as Logo } from "./assets/logo.svg";
import Navbar from "./components/Navbar/Navbar";


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

it('home page renders welcome message', () => {
    const { getByText } = render(<App />);
    expect(getByText('Finding ethically')).toBeInTheDocument();
});


it('renders the expected UI for the splash page', () => {

    const nav_bar = renderer.create(Navbar).toJSON();
    expect(nav_bar).toMatchSnapshot();
});

it('checks the logo component against expected snapshot', () =>{
    const logo_comp = renderer.create(<Logo/>).toJSAON();
    expect(logo_comp).toMatchSnapshot();
});
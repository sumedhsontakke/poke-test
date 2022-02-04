//import React from "react";
import { render, screen, fireEvent,React } from '@testing-library/react';

import { Button } from './Button';
import { AllDetails } from "../molecules/AllDetails";
import {
  BrowserRouter as Router,
} from "react-router-dom";

describe('Button component', () => {
  test('renders without error', () => {
    render(
        <Button 
            value={'Continue button'}
            clickEvent={()=>{}}
        />
    );
  });

  test('verify button text render', () => {
    const handler = jest.fn();
    const { container } = render(<Button 
        value={'Continue button'}
        clickEvent={()=>{}}
    />);
    expect(container.firstChild).toHaveTextContent('Continue button')
   });

});



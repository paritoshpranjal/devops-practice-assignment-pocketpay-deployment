import React from 'react';
import TypographyComponent from '.';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Typography tests', () => {
    test('renders the typography component', () => {
        render(<TypographyComponent text={"send money"}/>);
        const text = screen.getByText(/send money/i);
        expect(text).toBeInTheDocument();
    });
});

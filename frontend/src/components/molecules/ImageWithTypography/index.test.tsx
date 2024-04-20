import React from 'react';
import '@testing-library/jest-dom';
import ImageTypography from '.';
import { render, screen } from '@testing-library/react';
import Image from '../../../../public/assets/images/Illustration.svg'

describe('HomeBackground tests', () => {
    test('should render image', () => {
        render(
            <ImageTypography
                text={'Activity'}
                src={Image}
            />
        );
        const checkTest = screen.getByRole('img');
        expect(checkTest).toBeInTheDocument();
    });

    test('should render text', () => {
        render(<ImageTypography text={'Transactions'} />);
        const text = screen.getByText(/Transactions/i);
        expect(text).toBeInTheDocument();
    });
});

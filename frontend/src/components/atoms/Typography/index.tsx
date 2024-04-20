import React from 'react';
import {
    Typography as MuiTypography,
    TypographyProps
} from '@mui/material';
import Theme from '../../../theme';

interface MuiTypographyProps extends TypographyProps {
    text: React.ReactNode;
    variant?: any;
    color?: string;
    sx?: object;
}
const TypographyComponent = (props: MuiTypographyProps) => {
    return (
        <MuiTypography fontFamily={Theme.typography.fontFamily} {...props}>
            {props.text}
        </MuiTypography>
    );
};

export default TypographyComponent;

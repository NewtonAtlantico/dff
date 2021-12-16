import React from 'react';
import { StyledButton } from './button-styles';

const Button =  ({ onClick, children, type }) => (
    <StyledButton onClick={onClick} type={type}>
        {children}
    </StyledButton>
)

export default Button;
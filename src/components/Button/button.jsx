import React from 'react';
import { StyledButton } from './button-styles';

export default ({ onClick, children }) => (
    <StyledButton onClick={onClick}>
        {children}
    </StyledButton>
)
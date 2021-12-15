import React from 'react';
import {StyledInput} from './input-styles';

export default ({onChange, value, label}) => (
    <StyledInput 
        value={value}
        onChange={onChange}
        label={label}
    />
)
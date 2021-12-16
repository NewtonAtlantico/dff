import React from 'react';
import {StyledInput, StyledLabel} from './input-styles';

const Input = ({onChange, value, label, fieldRef, type}) => (
    <div>
        <StyledLabel>{label}</StyledLabel><br/>
        <StyledInput 
            value={value}
            onChange={onChange}
            ref={fieldRef}
            type={type}
        />
    </div>
)

export default Input;
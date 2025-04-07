import React from 'react';
import { TextFormField } from './form';

export interface TextInputProps extends TextFormField {
    width: string
}

export const TextInput = ({
    width
}: TextInputProps)  => {
    return (
        <div style={{width: width}}></div>
    );
};

export default TextInput;
import React from 'react';

import {
    GroupContainer,
    FormInputContainer,
    FormInputLabel
} from './forn-input.styles';

const FormInput = ({ onChangeHandle, label, ...otherProps }) => {
    return (
        <GroupContainer>
            <FormInputContainer onChange={onChangeHandle} {...otherProps} />
            {
                label ?
                    (
                        <FormInputLabel length={otherProps.value.length}>
                            {label}
                        </FormInputLabel>
                    )
                    : null
            }
        </GroupContainer>
    );
}

export default FormInput;
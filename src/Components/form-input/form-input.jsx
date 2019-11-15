import React from 'react';

import './form-input.scss';

const FormInput = ({handleSubmit,label,...OtherProps}) => (
    <div className='group'>
        <input className='form-input' onChange={handleSubmit} {...OtherProps} />
            {
                label ?
                (<label className={`${OtherProps.value.length ? 'shrink' : '' } form-input-label`}>
                    {label}
                </label>)
                :null
            }
    </div>
)

export default FormInput;
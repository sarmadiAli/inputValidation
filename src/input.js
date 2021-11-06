import React, { useEffect, useState } from 'react';
import { validate } from './validators';

const INPUT_STATES = {
  UNTOUCHED: 'UNTOUCHED',
  VALID: 'VALID',
  INVALID: 'INVALID'
};



const Input = props => {
  const [validateState, setValidateState] = useState({
    validateState: false,
    fouce: 0,

  })
  const [value, setValue] = useState()
  useEffect(() => {
    console.log("vdalvandva", validateState)
  }, [validateState])

  return (
    <div className={`form-input ${!validateState.validateState && validateState.fouce > 0 ? "form-input--invalid" : ""}`} data-testid="form-input">
      <label htmlFor={props.id} >{props.label}</label>
      <input id={props.id}
        onChange={(e) => {
          const val = e.target.value
          setValidateState(prevState => ({ ...prevState, validateState: validate(val, props.validators) }))
          setValue(val)
        }}
        onBlur={() => {
            setValidateState(prevState => ({ ...prevState, fouce: prevState.fouce + 1 }))
        }}
        onFocus={() => {
          // setValidateState(true)
        }}


      />
      <p>{!validateState.validateState && validateState.fouce > 0 ? props.errorText : ''}</p>
    </div>
  )
};

export default Input;

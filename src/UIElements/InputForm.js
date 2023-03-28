import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  margin: var(--gap) 0;

  label {
    font-size:var(--font-sl);
  }

  input {
    padding: var(--padding-sl);
    border: 1px solid var(--light-grey-color);
    border-radius: var(--button-border-radius);
    font-size: var(--font-sl);

    &:focus {
      outline: none;
      border-color: var(--grey-color);
      box-shadow: 0 0 1px 1px var(--theme-color);
    }
  }
`;

const InputForm = ({
  labelText,
  inputType,
  placeholder,
  inputName,
  onChange,
  inputValue
}) => {
  return (
    <InputWrapper>
      <label>{labelText}</label>
      <input
        type={inputType}
        placeholder={placeholder}
        name={inputName}
        onChange={(e) => onChange(e)}
        value={inputValue}
      />
    </InputWrapper>
  );
};

export default InputForm;

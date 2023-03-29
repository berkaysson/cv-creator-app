import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.buttonType === "secondary"
      ? "var(--grey-color)"
      : props.buttonType === "danger"
      ? "var(--danger-color)"
      : props.buttonType === "add"
      ? "var(--light-color)"
      : "var(--theme-color)"};
  color: ${props => (props.buttonType === 'add' ? 'var(--grey-color)' : 'var(--light-color)')};
  border: 1px ${(props) => (props.buttonType === "add" ? "dashed" : "solid")};
  border-color: ${props => (props.buttonType === 'add' ? 'var(--grey-color)' : 'var(--light-grey-color)')};
  border-radius: var(--button-border-radius);
  padding: var(--btn-padding);
  font-size: var(--font-sl);
  cursor: pointer;
  width: ${props => (props.buttonType === 'add' ? '100%' : 'auto')};
  margin-top: ${props => (props.buttonType === 'add' ? 'var(--margin)' : 'auto')};

  &:hover {
    opacity: 0.9;
  }

  &:active{
    border-color: var(--grey-color);
  }
`;

const Button = ({ onClick, text, type, buttonType }) => {
  return (
    <StyledButton type={type} onClick={onClick} buttonType={buttonType}>
      {text}
    </StyledButton>
  );
};

export default Button;

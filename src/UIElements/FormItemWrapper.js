import styled from "styled-components";

const FormItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--padding-sl) 0;
  width: 100%;

  & button{
    width: 25%;
  }
`

export default FormItemWrapper;
import styled, { css } from 'styled-components';

export const InputComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputComponentStyle = styled.input`
  ${({variant}) => css`
    margin: 0;
    box-sizing: border-box;

    background-color: transparent;
    border-radius: 0.3rem;

    border: 1px solid ${variant === 'light' ? '#b6b5bc' : '#b6cdff'};
    color: ${variant === 'light' ? '#67719a' : '#b6b5bc'};

    padding: 0.5rem;
    font-size: 1rem;

    outline: none;
    &:focus {
      border-color: #67719a;
    }
  `}
`;

export const InputLabel = styled.label`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;


  color: #6b6587;
`

export const InputHelperText = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  color: #ae4646;
`
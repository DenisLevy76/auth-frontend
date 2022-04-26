import styled, { css } from 'styled-components';

export const InputComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const InputComponentStyle = styled.input`
  ${({variant}) => css`
    background-color: transparent;
    border-radius: 0.6rem;

    border: 1px solid ${variant === 'light' ? '#b6b5bc' : '#a2beff'};
    color: ${variant === 'light' ? '#67719a' : '#e2eaff'};

    padding: 0.5rem;
    font-size: 1rem;

    outline: none;
    &:focus {
      border-color: #a2beff;
    }

    &::placeholder{
      color: ${variant === 'light' ? '#BBC7E6' : '#a5c2ff'};
    }
  `}
`;

export const InputLabel = styled.label`
  ${(color) => css`
    font-weight: 700;
    margin-bottom: 0.3rem;


    color: ${color};
  `}
`

export const InputHelperText = styled.p`
  font-size: 15px;
  margin-top: 0.2rem;
  color: #ae4646;
`
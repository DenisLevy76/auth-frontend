import styled, { css } from 'styled-components';

export const ContainerWrapper = styled.section`
  ${({bgColor}) => css`
    background-color: ${bgColor};
    padding: 2rem;
    border-radius: 1.5rem;
    box-shadow: 0px 0px 10px rgba(17.6, 12.9, 54.1, 0.5);
    min-width: 30rem;
  `}
`
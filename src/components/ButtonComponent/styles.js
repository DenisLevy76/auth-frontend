import styled from 'styled-components';
import { css } from 'styled-components';

export const Button = styled.button`
${({bgcolor, color}) => css`
    height: 35px;
    width: 100%;
    border-radius: 0.3rem;
    border: none;
    background-color: ${bgcolor};
    color: ${color};
    cursor: pointer;
`}
`;


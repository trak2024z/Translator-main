import styled from 'styled-components';

export const Select = styled.select`
    padding: 0.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.6rem;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    outline: none;
    border-radius: 1.2rem;
    width: 25%;
    &:focus {
        border: 1px solid ${({ theme }) => theme.colors.primary};
    }
`;

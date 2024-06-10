import styled from 'styled-components';

export const Textarea = styled.textarea`
    padding: 1rem;
    border: ${({ theme }) => theme.colors.lightPurple};
    box-shadow: -0.2rem 0.4rem 1rem rgba(115, 124, 142, 0.09);
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.6rem;
    &:focus {
        outline: none;
        box-shadow: -0.2rem 0.4rem 1rem rgba(115, 124, 142, 0.3);
    }
    &.error {
        border: 1px solid ${({ theme }) => theme.colors.error};
    }
`;

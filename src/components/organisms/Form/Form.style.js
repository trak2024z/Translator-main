import styled from 'styled-components';

export const StyledForm = styled.form`
    width: 100%;
`;

export const Top = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
`;

export const Bottom = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;
`;

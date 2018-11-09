import styled from 'styled-components';

export const CenteredDiv = styled.div`
    border: 1px solid #000;
    width: 80%;
    height: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    text-align: center;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const BlackoutDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 500;
    background-color: #000;
    opacity: 0.4;
`;
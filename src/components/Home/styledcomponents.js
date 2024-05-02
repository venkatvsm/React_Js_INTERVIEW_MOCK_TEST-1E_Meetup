import Styled from 'styled-components'

export const HomeContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
export const HomeContainerHeading = Styled.h1`
    color: ${props => (props.isRegister === true ? '#3b82f6' : '#475569')};
    font-family: "Roboto";
    margin: 2px;
    font-size: 46px;
    font-weight: ${props => (props.isRegister === true ? '600' : '500')};
`
export const HomeContainerPara = Styled.p`
    color: #334155;
    margin: 7px;
    margin-bottom: 15px;
    font-family: "Roboto";
    font-weight: 500;
    font-size: 21px;
    
`
export const HomeContainerImage = Styled.img`
    width: 50%;
`
export const RegisterBtn = Styled.button`
    width: 110px;
    height: 40px;
    background-color: #2563eb;
    color: #ffffff;
    margin-bottom: 15px;
    font-family: "Roboto";
    font-weight: 600;
    border-radius: 8px;
    border: none;
    outline: none;
    cursor: pointer;
`
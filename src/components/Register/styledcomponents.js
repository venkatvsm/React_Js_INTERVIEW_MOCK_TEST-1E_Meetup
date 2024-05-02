import Styled from 'styled-components'

export const RegisterContainer = Styled.div`
    height: 100vh;
`
export const RegisterCardContainer = Styled.div`
    height: 50%;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    margin-left: 10%;
`
export const RegisterImageContainer = Styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const RegisterImage = Styled.img`
    width: 80%;
`
export const RegisterFormContainer = Styled.form`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
export const RegisterFormHeading = Styled.h1`
    font-family: 'Roboto';
    color: #334155;
`
export const RegisterFormLabel = Styled.label`
    font-family: 'Roboto';
    color: #475569;
    font-weight: 500;
    margin-bottom: 10px;
`
export const RegisterFormInput = Styled.input`
    font-family: 'Roboto';
    border-style: solid;
    border-color: #cbd5e1;
    height: 42px;
    width: 100%;
    font-weight: 500;
    font-size: 14px;
    padding-left: 10px;
    margin-bottom: 6%;
`
export const RegisterFormSelectContainer = Styled.select`
    height: 42px;
    width: 100%;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 14px;
    border-style: solid;
    border-width: 2px;
    border-color: #cbd5e1;
    margin-bottom: 8%;
`
export const RegisterFormSelectoption = Styled.option`
`
export const RegisterFormBtn = Styled.button`
    height: 52px;
    width: 180px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: #2563eb;
    color: #ffff;
    font-family: 'Roboto';
    font-weight: 600;
    border-radius: 10px;
    font-size: 15px;
`
export const ErrorMsg = Styled.p`
    font-family: 'Roboto';
    margin: 5px;
    margin-left: 5px;
    color: #ff0b37;
`

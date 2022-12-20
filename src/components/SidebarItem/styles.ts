import styled from "styled-components";


export const Container = styled.div`
margin: 30px 0;
cursor: pointer;

 a {
    display: flex;
    align-items: center;
    text-decoration: none;
 }
`;
export const Info = styled.div`
flex: 1;
margin-rigth: 20px;
`
export const Title = styled.div`
text-align: right;
font-weight: bold;
margin-bottom: 5px;
font-size: 15px;
color: #FFF;
margin-right: 5px;
`
export const Descrition = styled.div`
text-align: right;
font-size: 13px;
color: #B8B8D4;
margin-right: 5px;
`
export const IconArea  = styled.div<{active: boolean;}>`
width: 50px;
height: 50px;
border-radius: 50%;
background-color: ${props => props.active ? '#25cd89' : '#494A7C'};
display: flex;
justify-content:center;
align-items: center;
margin-right: 10px;
`
export const Point = styled.div<{active: boolean;}>`
width: 6px;
height: 5px;
border: 3px solid #494A7C;
border-radius: 50%;
margin-left: 30px;
margin-right: -6px;
background-color: ${props => props.active ? '#25cd89' : '#02044A'};
`


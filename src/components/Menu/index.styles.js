import styled from 'styled-components';

export const Title = styled.h1`
font-size: 20;
font-family: 'Roboto', sans-serif;
margin-top: 100;
`;

export const Container = styled.div`
margin: 0 auto;
padding: 0 2% 50px 2%;
max-width: 600px;
`;

export const MenuBoard = styled.div`
margin: 0 auto;
background-color: #fff;
width: 100%;
height: 100;
display: flex;
flex-direction: column;
`;

export const CourseHeader = styled.h3`
font-size: 20px;
padding: 0 10px;
font-family: 'Roboto', sans-serif;
`;

export const MenuItem = styled.button`
width: 100;
height: 100;
padding: 0 10px;
display: flex;
justify-content: space-between;
`;

export const CheckoutButton = styled.button`
width: 100%;
height: 50px;
position: fixed;
left: 0;
bottom: 0;
background-color: #4CAF50;
display: flex;
justify-content: space-around;
color: #fff;
font-size: 15px;
align-items: center;
`;

export const ResetButton = styled.button`
background-color: #e74c3c;
color: #fff;
`;

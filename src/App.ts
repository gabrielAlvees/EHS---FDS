import styled from "styled-components";

export const Title = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
    font-weight: bolder;
    color: orange;
    margin-bottom: 20px;
    text-decoration: none;
    text-align: center;
`;

export const Container = styled.div`
    height: 50vh;     
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 50px  auto;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
`;

export const Link = styled.a`
    background-color: orange;
    width: 60%;
    height: 50px;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: bolder;
    color: #fff;
    margin-bottom: 20px;
    text-decoration: none;

`;
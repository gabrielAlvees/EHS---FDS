import styled from "styled-components";

export const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2.2rem;
  font-weight: 900;
  color: orange;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

export const Container = styled.div`
  width: 90%;
  max-width: 450px;
  min-height: 60vh;
  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
  justify-content: flex-start;

  margin: 0 auto 50px auto;

  background: #fff;
  box-shadow: 0 0 15px rgba(0,0,0,0.15);
  border-radius: 15px;
`;

export const LinkButton = styled.a`
  width: 100%;
  max-width: 350px;
  height: 55px;

  background-color: orange;
  color: #fff;

  border-radius: 10px;
  text-decoration: none;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.1rem;
  font-weight: bold;

  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #ff9f1a;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.2);
  }
`;

export const SmallButtonList = styled.div`
  width: 100%;
  max-width: 350px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  gap: 10px;

  margin-bottom: 20px;
`;

export const SmallLinkButton = styled.a`
  background-color: orange;
  color: white;

  text-decoration: none;
  border-radius: 8px;

  height: 45px;

  font-size: 1rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: #ff9f1a;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }
`;

export const ButtonMain = styled.button`
  width: 100%;
  max-width: 350px;
  height: 55px;

  background-color: orange;
  color: #fff;

  border-radius: 10px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.1rem;
  font-weight: bold;

  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ff9f1a;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.2);
  }
`;

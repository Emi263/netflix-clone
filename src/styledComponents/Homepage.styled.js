import styled from "styled-components";

export const Container = styled.div`
  box-shadow: -1px 18px 23px 7px rgba(0, 0, 0, 1) inset;
  -webkit-box-shadow: -1px 18px 23px 7px rgba(0, 0, 0, 1) inset;
  -moz-box-shadow: -1px 18px 23px 7px rgba(0, 0, 0, 1) inset;
  position: relative;
  width: 100%;
  height: clamp(50vh, 50vh + 45vw, 89vh);
  background-color: black;
  border-bottom: 8px solid rgb(34, 34, 34);
  z-index: 1;
  //top blurred black line
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 20px;
    background-color: hsla(0, 0%, 0%, 0.6);
    filter: blur(4px);
    top: 0;
    left: 0;
  }
`;

//background of homepage
export const Banner = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  max-width: 100%;
  object-fit: cover;
  height: 100%;
  width: 100%;
  z-index: -5;
  opacity: 0.35;
`;

//header
export const Header = styled.header`
  z-index: 1;
  position: relative;
  width: 92%;
  margin: 0 auto;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

//Netflix logo
export const NetflixLogo = styled.img`
  position: relative;
  max-width: 100%;
  width: calc(6vw + 50px);
  @media screen and (max-width: 450px) {
    width: calc(10vw + 50px);
  }
`;

//siginButton
export const SignInButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 0.5rem 1.1rem;
  transform: translate(3.2px, -2.9px);
  color: white;
  background-color: rgb(229, 10, 20);
  border-radius: 4px;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 550px) {
    padding: 0.4rem 0.6rem;
  }
`;

//Text
export const TextContainer = styled.div`
  margin: 6rem auto 0 auto;
  position: relative;
  width: 100%;
  display: flex;
  flex: 0.7rem;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 700px) {
    width: 90%;
    flex: 100px;
  }
  @media screen and (max-width: 450px) {
    margin-top: 0;
  }
`;

//texts with different sizes, line-heights, by using props
export const Text = styled.h1`
  position: relative;
  &:first-child {
    padding-top: 2.5rem;
  }
  &:nth-child(2) {
    font-size: 24px;
    line-height: 61px;
    letter-spacing: 0.02rem;
    @media screen and (max-width: 450px) {
      font-size: 18px;
    }
  }
  &:nth-child(3) {
    line-height: 25px;
    padding-left: 0.6rem;
    font-size: 21px;
    width: 80%;
    margin: 0 auto;
    padding-bottom: 1rem;
    @media screen and (max-width: 450px) {
      font-size: 16px;
      width: 100%;
      margin-bottom: 1rem;
    }
  }
  margin-bottom: 0.1rem;
  text-align: center;
  font-size: ${(props) => props.fontSize}px;
  color: white;
  line-height: ${(props) => props.lineHeight || 53}px;
  font-family: sans-serif;
  @media screen and (max-width: 700px) {
    margin-bottom: 1rem;
    font-size: ${(props) => props.mobileSize}px;
    line-height: ${(props) => props.mobileHeight || 20}px;
  }

  @media screen and (max-width: 450px) {
    padding-top: 0rem;
    font-size: ${(props) => props.ixSize}px;
    line-height: 30px;
  }
`;

//flex container
export const Flex = styled.div`
  padding-left: 1rem;
  position: relative;
  display: flex;
  justify-content: center;
  width: 80%;
  max-width: 970px;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    flex: 2rem;
    width: 100%;
  }
`;

export const Input = styled.input`
  flex: 0.6;
  padding: 1.5rem;
  margin-top: 5px;
  padding-top: 1.3rem;
  padding-left: 0.8rem;
  outline: none;
  border: none;
  &::-webkit-input-placeholder {
    transition: linear 0.1s;
    font-size: 16px;
  }

  &:focus::placeholder {
    transform: translateY(-120%) translateX(-0.6%);
    font-size: 13px;
  }
  @media screen and (max-width: 900px) {
    width: 60%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 450px) {
    width: 90%;
    padding: 1rem;
  }
`;

export const GetStartedButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 2rem;
  border: none;
  cursor: pointer;
  color: white;
  margin-top: 5px;
  background-color: hsl(357, 91.6%, 46.9%);
  font-size: 25px;
  &:hover {
    background-color: hsl(357, 91.6%, 50.9%);
  }

  @media screen and (max-width: 900px) {
    padding: 0.7rem 0.5rem;
    font-size: 14px;
    width: 140px;
    margin: 0 auto;
  }
`;

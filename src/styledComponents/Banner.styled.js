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
export const Header = styled.header`
  z-index: 1;
  position: relative;
  width: 89%;
  margin: 0 auto;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NetflixLogo = styled.img`
  position: relative;
  max-width: 100%;
  width: calc(5vw + 50px);
`;
export const SignInButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 0.4rem 0.8rem;
  color: white;
  background-color: rgb(229, 10, 20);
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 550px) {
    padding: 0.4rem 0.6rem;
  }
`;

export const TextContainer = styled.div`
  margin: 6rem auto 0 auto;
  position: relative;
  width: 100%;
  display: flex;
  flex: 0.7rem;
  flex-direction: column;

  justify-content: space-evenly;
  @media screen and (max-width: 700px) {
    width: 90%;
    flex: 100px;
  } ;
`;
export const Text = styled.h1`
  margin-bottom: 0.1rem;
  text-align: center;
  font-size: ${(props) => props.fontSize}px;
  color: white;
  line-height: ${(props) => props.lineHeight || 55}px;
  font-family: sans-serif;
  @media screen and (max-width: 700px) {
    margin-bottom: 1rem;
    font-size: ${(props) => props.mobileSize}px;
    line-height: ${(props) => props.moblineHeight || 20}px;
  }
`;

export const Flex = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 70%;
  max-width: 600px;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    flex: 2rem;
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 70%;
  padding: 1rem;
  outline: none;
  border: none;
  &::-webkit-input-placeholder {
    transition: ease-in 0.3s;
  }

  &::placeholder {
  }
  &:focus::placeholder {
    transform: translateY(-140%);
    font-size: 10px;
  }
  @media screen and (max-width: 900px) {
    width: 95%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
`;

export const GetStartedButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem;
  border: none;
  cursor: pointer;
  color: white;
  background-color: hsl(357, 91.6%, 46.9%);
  font-size: 21px;
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

import Styled from "styled-components";

export const Container = Styled.div`
width:100%;
background: black;
color: white;
border-bottom: 8px solid rgb(34,34,34);
`;

export const MainText = Styled.h1`
padding: 4rem;
text-align: center;
font-size: 50px;
line-height: 50px;
font-family: sans-serif;

@media screen and (max-width: 850px) {
  font-size: 27px;
  line-height:1.2;
}
`;

export const AccContainer = Styled.div`
position: relative;
height: auto;
display: flex;
flex-direction: column;
gap: 10px;
width: 80%;
width: clamp(350px, 100%, 810px );
margin: 0 auto;
padding-bottom:3rem;
`;

export const Wrapper = Styled.div`

width: 100%;
position: relative;
transition: ease-in 1s;

`;
export const Accordion = Styled.div`
//disable user selection
-webkit-touch-callout:none;
-webkit-user-select:none;
-khtml-user-select:none;
-moz-user-select:none;
-ms-user-select:none;
user-select:none;
-webkit-tap-highlight-color:rgba(0,0,0,0);
overflow: hidden;
cursor:pointer;
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 auto;
background: rgb(48,48,48);
font-family: "Arial", sans-serif;
font-size: 26px;
padding: 1.3rem;
transition: ease-in 0.3s;

@media screen and (max-width: 850px) {
  font-size: 18px;
  line-height:1.2;
}
`;
export const Content = Styled.div`
overflow: hidden;
max-height: 0px;
position: relative;
background: rgb(48,48,48);
font-family: "Arial", sans-serif;
margin-top: 1px;
font-size: 26px;
font-weight: 300;
line-height: 1.5;
transition: all 0.25s ease-in;

p {
  padding: 1.3rem;
}

&.isopen {
  max-height: 500px;
 
}
@media screen and (max-width: 850px) {
  font-size: 18px;
  line-height:1.5;
}

`;

export const Membership = Styled.div`
font-size: 19px;
font-family: "Arial", sans-serif;
text-align: center;
padding: 1.6rem;
`;

export const Flex = Styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 70%;
  max-width: 733px;
  margin: 0 auto;
  padding-bottom: 2rem;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    flex: 2rem;
    width: 100%;
  }
`;

export const Input = Styled.input`
flex:0.6;
  width: 70%;
  padding: 1.5rem;
  outline: none;
  border: none;
  &::-webkit-input-placeholder {
    transition: linear 0.1s;
    font-size: 16px;
  }

  &:focus::placeholder {
    transform: translateY(-140%) translateX(-1%);
    font-size: 13px;
  }
  @media screen and (max-width: 900px) {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 1rem;
    padding: 1.4rem 1rem; 

  }
`;

export const GetStartedButton = Styled.button`
  display: flex;
  flex: 0.3;
  align-items: center;
  justify-content: center;
  padding: 0.6rem;
  border: none;
  cursor: pointer;
  color: white;
  background-color: hsl(357, 91.6%, 46.9%);
  font-size: 27px;
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

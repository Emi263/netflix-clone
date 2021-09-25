import Styled from "styled-components";

export const Section = Styled.section`
font-family: sans-serif;
position:relative;
width: 100%;
height: 60vh;
background: black;
border-bottom: 8px solid rgb(34,34,34);
display: flex;
flex-direction: ${(props) => props.flexDir || "row"};

@media screen and (max-width: 860px) {

height: 75vh;
flex-direction: column;

}


`;
export const TextSection = Styled.div`
position:relative;
width: 50%;
flex:0.5;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: white;
padding:2rem;
padding-left: 4rem;
@media screen and (max-width: 860px) {
width: 100%;
flex: 0.3;
padding: 0;
}
`;

export const Text1 = Styled.p`
text-align:center;
font-size: 40px;
font-weight: 600;
line-height:55px;
position: relative;
width: 88%;

@media screen and (max-width: 860px) {
font-size: 28px;
line-height: 35px;margin-bottom:1rem;

}
`;
export const Text2 = Styled.p`
text-align:center;
position: relative;width: 88%;
font-size: 22px;
weight: 400;
line-height:30px;
position: relative;
@media screen and (max-width: 860px) {
    font-size: 18px;
line-height: 20px;
width: 94%;
}
`;

export const ImageSection = Styled.div`
overflow: hidden;
position:relative;
flex: 0.5;
display: grid;
place-content: center;
width: 100%; 
justify-items: start;
@media screen and (max-width: 860px) {
justify-items: center;
 flex: 0.7;

}


`;
export const Image = Styled.img`
position:relative:
margin: 0 auto;
width: 80%;
height: auto;
max-width:100%;
z-index:6;
`;

export const Video = Styled.img`
position: absolute;
width: ${(props) => props.width || 70}%; 
z-index: 5;
top: ${(props) => props.top || 20}%;
left: ${(props) => props.left || 5}%;
@media screen and (max-width:1200px) {
    top: ${(props) => props.top1200 || 30}%;
  
}
@media screen and (max-width: 860px) {
    width: ${(props) => props.width860 || 60}%; 
    top: ${(props) => props.top860 || 20}%;
left: ${(props) => props.left860 || 20}%;


}
@media screen and (max-width: 666px) {
    width: ${(props) => props.width666 || 65}%; 
    top: ${(props) => props.top666 || 25}%;
left: ${(props) => props.left666 || 15}%;


}
@media screen and (max-width:480px) {
    width: ${(props) => props.width480 || 65}%; 
    top: ${(props) => props.top480 || 35}%;
left: ${(props) => props.left480 || 15}%;


}
`;

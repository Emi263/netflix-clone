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
&:nth-child(3) {
div>p {width: 100%;
    text-align: start;
    padding-left: 0.6rem;
@media screen and (max-width: 850px) {
    text-align: center;
}}

}
&:nth-child(5) {
div>p {width: 80%;
    text-align: start;
    padding-left: 0.6rem;
}}

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
text-align:center;
@media screen and (max-width: 860px) {
width: 100%;
flex: 0.3;
padding: 0;
}
`;

export const Text1 = Styled.p`
margin:0 auto;
text-align:center;
font-size: 50px;
font-weight: 600;
line-height:55px;
position: relative;
width: 80%;
padding-top:1rem;
padding-left:3.5rem;
padding-bottom:1rem;
@media screen and (max-width: 860px) {
    width: 100%;
font-size: 28px;
line-height: 35px;
margin-bottom:1rem;

}
`;
export const Text2 = Styled.p`
padding-left:8.5rem;
padding-bottom:1rem;
text-align:start;
width: 90%;
font-size: 26px;
weight: 400;
line-height:30px;
position: relative;
@media screen and (max-width: 860px) {
    text-align:center;
    font-size: 18px;
line-height: 25px;
width: 80%;
padding: 2rem;
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
display: block;
position:relative:
margin: 0 auto;
width: 100%;
height: auto;
max-width:100%;
z-index:6;
`;

export const Video = Styled.img`
position: absolute;
width: ${(props) => props.width || 80}%; 
z-index: 5;
top: ${(props) => props.top || 20}%;
left: ${(props) => props.left || 5}%;
@media screen and (max-width:1200px) {
    top: ${(props) => props.top1200 || 25}%;
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
    width: ${(props) => props.width480 || 72}%; 
    top: ${(props) => props.top480 || 25}%;
left: ${(props) => props.left480 || 15}%;
}
`;

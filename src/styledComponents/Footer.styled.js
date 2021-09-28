import styled from "styled-components";
//use Grid

export const Container = styled.footer`
  position: relative;
  background-color: black;
  width: 62.5%;
  margin: 0 auto;
  padding-bottom: 2rem;
  padding-top: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  row-gap: 1rem;
  box-sizing: border-box;

  @media screen and (max-width: 500px) {
    width: 90%;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;
export const Element = styled.li`
  padding: 0.1rem;
  cursor: pointer;
  position: relative;
  list-style: none;
  color: rgb(117, 111, 120);
  font-family: "Arial", sans-serif;
  font-size: 13px;
  &:first-child {
    grid-column: 1/-1; //spans all the colums
    font-size: 16px;
    padding-bottom: 1rem;
  }
  &:last-child {
    padding-top: 1rem;
    grid-column: 1/-1; //spans all the colums
    a:hover {
      border: none;
    }
  }
  a {
    text-decoration: none;
    position: relative;
    &:hover {
      border-bottom: 1px solid rgb(117, 111, 120);
    }
  }
`;

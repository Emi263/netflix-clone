import { Container, Element } from "../styledComponents/Footer.styled";
import { FooterData } from "../data/data";
function Footer() {
  return (
    <Container>
      {FooterData.map((data) => {
        return (
          <Element>
            <a>{data}</a>
          </Element>
        );
      })}
    </Container>
  );
}

export default Footer;

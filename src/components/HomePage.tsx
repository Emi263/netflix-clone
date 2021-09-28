import BannerLogo from "../assets/banner.jpg";
import Netflix from "../assets/nlogo.png";
import { FaAngleRight } from "react-icons/fa";
import {
  Banner,
  Container,
  Header,
  NetflixLogo,
  SignInButton,
  Text,
  TextContainer,
  Input,
  GetStartedButton,
  Flex,
} from "../styledComponents/Homepage.styled";
function HomePage() {
  return (
    <>
      <Container>
        <Header>
          <NetflixLogo src={Netflix} />
          <SignInButton>Sign In</SignInButton>
        </Header>
        <TextContainer>
          <Text
            ixSize={28} //for devices <380px
            fontSize={49} //initial fontsize
            mobileSize={28}
            lineHeight={53}
            moblineHeight={25}
          >
            Unlimited movies, TV <br /> shows, and more.
          </Text>
          <Text fontSize={20} mobileSize={18} ixSize={12}>
            Watch anywhere. Cancel anytime.
          </Text>
          <Text fontSize={18} mobileSize={15}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </Text>
          <Flex>
            <Input type="text" placeholder="Email address" />
            <GetStartedButton>
              Get Started <FaAngleRight />
            </GetStartedButton>
          </Flex>
        </TextContainer>
        <Banner src={BannerLogo} />
      </Container>
    </>
  );
}

export default HomePage;

import React, { InputHTMLAttributes, useEffect, useRef, useState } from "react";
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
} from "../styledComponents/Banner.styled";
function HomePage() {
  const inputRef = useRef<HTMLInputElement | null>();

  return (
    <>
      <Container>
        <Header>
          <NetflixLogo src={Netflix} />
          <SignInButton>Sign In</SignInButton>
        </Header>

        <TextContainer>
          <Text
            fontSize={40}
            mobileSize={28}
            lineHeight={50}
            moblineHeight={25}
          >
            Unlimited movies, TV <br /> shows, and more.
          </Text>
          <Text fontSize={20} mobileSize={18}>
            Watch anywhere. Cancel anytime.
          </Text>
          <Text fontSize={15} mobileSize={15}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </Text>
          <Flex>
            {" "}
            <Input
              type="text"
              placeholder="Email address"
              ref={inputRef}
            />{" "}
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

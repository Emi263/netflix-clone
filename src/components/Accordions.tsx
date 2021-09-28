import {
  MainText,
  Container,
  Accordion,
  AccContainer,
  Content,
  Wrapper,
  Membership,
  Flex,
  Input,
  GetStartedButton,
} from "../styledComponents/Accordion.styled";
import { questiondata } from "../data/data";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";

import { useState } from "react";
function Accordions() {
  const [currentAccordionIndex, setCurrentAccordionIndex] = useState<
    number | null
  >(null);

  const isOpen = (index: number): boolean => {
    if (currentAccordionIndex === index) {
      return true;
    }
    return false;
  };

  const changeAccordion = (index: number) => {
    setCurrentAccordionIndex(index);
  };
  const toggle = (toggleIndex: number) => {
    if (toggleIndex === currentAccordionIndex) {
      setCurrentAccordionIndex(null);
    } else {
      return;
    }
  };
  return (
    <Container>
      <MainText>Frequently Asked Questions</MainText>
      <AccContainer>
        {questiondata.map((data, index) => {
          return (
            <Wrapper key={index}>
              <Accordion
                onClick={() => {
                  changeAccordion(index);
                  toggle(index);
                }}
              >
                <span>{data.question}</span>
                {isOpen(index) ? (
                  <AiOutlineClose style={{ fontSize: `30px` }} />
                ) : (
                  <AiOutlinePlus style={{ fontSize: `30px` }} />
                )}
              </Accordion>

              <Content className={isOpen(index) ? "isopen" : ""}>
                <p> {data.content}</p>
              </Content>
            </Wrapper>
          );
        })}
      </AccContainer>
      <Membership>
        Ready to watch? Enter your email to create or restart your membership.
      </Membership>
      <Flex>
        {" "}
        <Input type="text" placeholder="Email address" />
        <GetStartedButton>
          Get Started <FaAngleRight />
        </GetStartedButton>
      </Flex>
    </Container>
  );
}

export default Accordions;

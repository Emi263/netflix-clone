import { data } from "../data/data";
import {
  Section,
  TextSection,
  ImageSection,
  Image,
  Text1,
  Text2,
  Video,
} from "../styledComponents/Main.styled";
function Main() {
  return (
    <>
      {data.map((data, index) => {
        return (
          <Section key={index} flexDir={index % 2 !== 0 && "row-reverse"}>
            <TextSection>
              <Text1>{data.text1} </Text1>
              <Text2>{data.text2}</Text2>
            </TextSection>

            <ImageSection>
              <Video
                src={data.video}
                width={index == 2 && 50}
                left={index == 2 && 15}
                top860={index == 2 && 10}
                width860={index == 2 && 40}
                left860={index == 2 && 30}
                top666={index == 2 && 15}
                width666={index == 2 && 50}
                left666={index == 2 && 25}
                top480={index == 2 && 30}
                width480={index == 2 && 48}
                left480={index == 2 && 25}
              />
              <Image src={data.img} />
            </ImageSection>
          </Section>
        );
      })}
    </>
  );
}

export default Main;

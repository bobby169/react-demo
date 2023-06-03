import Heading from "./Heading.js";
import Section from "./Section.js";

export default function HeadIndex() {
  return (
    <Section>
      <Heading>主标题</Heading>
      <Section>
        <Heading>副标题</Heading>
        <Section>
          <Heading>子标题</Heading>
          <Section>
            <Heading>子子标题</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

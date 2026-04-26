"use client";
import styled from "@emotion/styled";
import { theme } from "@/components/Theme";

const Section = styled.section`
  text-align: center;
  position: relative;
  margin: ${theme.space[12]} ${theme.space[5]};
  h2 {
    font-size: 36px;
    margin-bottom: ${theme.space[6]};
  }
  p {
    text-align: left;
    line-height: 1.5;
    width: 60%;
    margin: 0 auto;
  }
`;

interface AboutProps {
  heading: string;
  body: string;
}

export const About = ({ heading, body }: AboutProps) => (
  <Section>
    <h2>{heading}</h2>
    <p>{body}</p>
  </Section>
);

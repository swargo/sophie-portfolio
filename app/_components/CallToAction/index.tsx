"use client";
import styled from "@emotion/styled";
import { theme } from "../Theme";
import { Link } from "@/components/Link";

const Section = styled.section`
  background-color: ${theme.color.secondary};
  border-top-left-radius: 16px;
  border-bottom-right-radius: 16px;
  padding: ${theme.space[8]} ${theme.space[6]};
  margin: 0 0 ${theme.space[8]} 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.space[5]};
  h2 {
    font-size: 36px;
    margin: 0;
  }
  p {
    font-size: ${theme.fontSize.lg};
    margin: 0;
  }
`;

interface CallToActionProps {
  heading: string;
  body: string;
  buttonLabel: string;
  href: string;
}

export const CallToAction = ({
  heading,
  body,
  buttonLabel,
  href,
}: CallToActionProps) => (
  <Section>
    <h2>{heading}</h2>
    <p>{body}</p>
    <Link href={href} label={buttonLabel} />
  </Section>
);

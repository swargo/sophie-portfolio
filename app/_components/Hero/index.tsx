"use client";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { theme } from "@/components/Theme";
import { Link } from "@/components/Link";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const slideInLeft = keyframes`
  from { transform: translateX(-100%); opacity: 0; }
  to   { transform: translateX(0);     opacity: 1; }
`;

const slideInRight = keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
`;

const Section = styled.div`
  background-color: ${theme.color.primary};
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  min-height: 50vh;
  display: flex;
  margin: 0;
  overflow: hidden;
  h1 {
    font-size: ${theme.fontSize.lg};
    margin-bottom: ${theme.space[3]};
  }
  h2 {
    margin-top: 0;
    font-size: ${theme.fontSize["3xl"]};
  }
`;

const LeftColor = styled.div`
  padding: 60px;
  flex-basis: 50%;
  display: flex;
  flex-wrap: wrap;
  animation: ${slideInLeft} 0.7s ease-out both;
`;

const RightColor = styled.div`
  background-color: ${theme.color.lightAccent};
  flex: 1;
  padding: 60px;
  border-top-right-radius: 16px;
  flex-basis: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${slideInRight} 0.7s ease-out both;
`;

const Checklist = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.space[4]};
`;

const CheckItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.space[3]};
  font-size: ${theme.fontSize.lg};
  svg {
    color: ${theme.color.tertiary};
    flex-shrink: 0;
    font-size: 22px;
  }
`;

interface HeroProps {
  tagline: string;
  headline: string;
  cta: string;
  href: string;
  checklist: string[];
}

export const Hero = ({ tagline, headline, cta, href, checklist }: HeroProps) => (
  <Section>
    <LeftColor>
      <div>
        <h1>{tagline}</h1>
        <h2>{headline}</h2>
      </div>
      <div>
        <Link href={href} label={cta} />
      </div>
    </LeftColor>
    <RightColor>
      <Checklist>
        {checklist.map((item) => (
          <CheckItem key={item}>
            <CheckCircleOutlineIcon />
            {item}
          </CheckItem>
        ))}
      </Checklist>
    </RightColor>
  </Section>
);

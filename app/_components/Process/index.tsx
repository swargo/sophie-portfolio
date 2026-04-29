"use client";
import styled from "@emotion/styled";
import { theme } from "../Theme";
import { ProcessProps } from "./types";

const Section = styled.section`
  margin: 0 64px;
  text-align: center;
  h2 {
    font-size: 36px;
    margin-bottom: ${theme.space[8]};
  }
`;

const Timeline = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Step = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0 ${theme.space[3]};

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 24px;
    left: 50%;
    width: 100%;
    height: 2px;
    background-color: ${theme.color.primary};
  }
`;

const StepNumber = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${theme.color.tertiary};
  color: ${theme.color.wh};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSize.lg};
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  margin-bottom: ${theme.space[5]};
`;

const StepTitle = styled.h3`
  font-size: ${theme.fontSize.xl};
  margin: 0 0 ${theme.space[2]} 0;
`;

const StepDescription = styled.p`
  font-size: 15px;
  line-height: 1.5;
  color: #444;
  margin: 0;
`;

export const Process = ({ heading, steps }: ProcessProps) => (
  <Section>
    <h2>{heading}</h2>
    <Timeline>
      {steps.map((step, i) => (
        <Step key={step.title}>
          <StepNumber>{i + 1}</StepNumber>
          <StepTitle>{step.title}</StepTitle>
          <StepDescription>{step.description}</StepDescription>
        </Step>
      ))}
    </Timeline>
  </Section>
);

export type { ProcessProps, ProcessStep } from "./types";

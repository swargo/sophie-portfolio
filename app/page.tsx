"use client";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Link } from "@/components/Link";
import { Container } from "@/components/Container";
import { HiddenUntilScroll } from "@/components/HiddenUntilScroll";
import { theme } from "@/components/Theme";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { AppShowcase } from "@/components/AppShowcase";
import { CallToAction } from "@/components/CallToAction";
import { Process } from "@/components/Process";
import { projects } from "@/content/projects";
import { apps } from "@/content/apps";
import { processSteps } from "@/content/process";
import { copy } from "@/content/copy";
import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
import DisabledVisibleIcon from "@mui/icons-material/DisabledVisible";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Item = styled.div`
  position: relative;
  justify-content: space-between;
  display: flex;
  flex: 1 1 15%;
  flex-wrap: wrap;
  align-items: center;
  padding: 68px 38px 32px 38px;
  -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const Content = styled.div`
  margin-bottom: auto;
`;

const Icon = styled.div`
  border-radius: 50%;
  background-color: ${theme.color.bk};
  width: 98px;
  height: 98px;
  padding: ${theme.space[5]};
  box-sizing: border-box;
  position: absolute;
  top: -49px;
  left: 0;
  right: 0;
  margin: auto;
  svg {
    color: ${theme.color.wh};
    font-size: 50px;
  }
`;

const WhiteContainer = styled.div`
  position: relative;
  z-index: 14;
`;

const AboutSection = styled.section`
  text-align: center;
  position: relative;
  margin: auto ${theme.space[5]};
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

const ServicesSection = styled.section`
  display: flex;
  margin: 0 64px 90px 64px;
  padding-top: 140px;
  gap: ${theme.space[6]};
  text-align: center;
  flex-wrap: wrap;
  h3 {
    margin-bottom: ${theme.space[5]};
    font-size: 24px;
  }
  p {
    margin-top: ${theme.space[5]};
    margin-bottom: ${theme.space[5]};
    font-size: 18px;
    line-height: 1.4;
  }
  hr {
    width: 54px;
    margin: 0 auto;
  }
`;

const slideInLeft = keyframes`
  from { transform: translateX(-100%); opacity: 0; }
  to   { transform: translateX(0);     opacity: 1; }
`;

const slideInRight = keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
`;

const HeroSection = styled.div`
  background-color: ${theme.color.primary};
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  min-height: 50vh;
  display: flex;
  margin: 0 0 75px 0;
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

const serviceIcons = [<CodeIcon />, <DisabledVisibleIcon />, <BrushIcon />];

const Home = () => {
  return (
    <Container>
      <WhiteContainer>
        <HeroSection>
          <LeftColor>
            <div>
              <h1>{copy.hero.tagline}</h1>
              <h2>{copy.hero.headline}</h2>
            </div>
            <div>
              <Link href={copy.hero.href} label={copy.hero.cta} />
            </div>
          </LeftColor>
          <RightColor>
            <Checklist>
              {copy.hero.checklist.map((item) => (
                <CheckItem key={item}>
                  <CheckCircleOutlineIcon />
                  {item}
                </CheckItem>
              ))}
            </Checklist>
          </RightColor>
        </HeroSection>
        <AboutSection>
          <h2>{copy.about.heading}</h2>
          <p>{copy.about.body}</p>
        </AboutSection>
        <HiddenUntilScroll>
          <div>
            <ServicesSection>
              {copy.services.map((service, i) => (
                <Item key={service.heading}>
                  <Content>
                    <Icon>{serviceIcons[i]}</Icon>
                    <h3>{service.heading}</h3>
                    <hr />
                    <p>{service.body}</p>
                  </Content>
                </Item>
              ))}
            </ServicesSection>
          </div>
        </HiddenUntilScroll>
        <HiddenUntilScroll>
          <ProjectShowcase
            heading={copy.work.heading}
            subheading={copy.work.subheading}
            projects={projects}
          />
        </HiddenUntilScroll>
        <HiddenUntilScroll>
          <AppShowcase
            heading={copy.apps.heading}
            subheading={copy.apps.subheading}
            apps={apps}
          />
        </HiddenUntilScroll>
        <HiddenUntilScroll>
          <Process heading={copy.process.heading} steps={processSteps} />
        </HiddenUntilScroll>
        <HiddenUntilScroll>
          <CallToAction
            heading={copy.cta.heading}
            body={copy.cta.body}
            buttonLabel={copy.cta.buttonLabel}
            href={copy.cta.href}
          />
        </HiddenUntilScroll>
      </WhiteContainer>
    </Container>
  );
};

export default Home;

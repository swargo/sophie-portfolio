"use client";
import styled from "@emotion/styled";
import { theme } from "@/components/Theme";
import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
import DisabledVisibleIcon from "@mui/icons-material/DisabledVisible";

const Section = styled.section`
  display: flex;
  margin: 0 64px;
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

const icons = [<CodeIcon />, <DisabledVisibleIcon />, <BrushIcon />];

interface Service {
  heading: string;
  body: string;
}

interface ServicesProps {
  services: Service[];
}

export const Services = ({ services }: ServicesProps) => (
  <Section>
    {services.map((service, i) => (
      <Item key={service.heading}>
        <Content>
          <Icon>{icons[i]}</Icon>
          <h3>{service.heading}</h3>
          <hr />
          <p>{service.body}</p>
        </Content>
      </Item>
    ))}
  </Section>
);

"use client";
import styled from "@emotion/styled";
import Link from "next/link";
import { theme } from "@/components/Theme";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { AppShowcaseProps } from "./types";

const Section = styled.section`
  margin: 0 64px 90px 64px;
  text-align: center;
  h2 {
    font-size: 36px;
    margin-bottom: ${theme.space[2]};
  }
  h3 {
    margin: 0;
    margin-bottom: ${theme.space[6]};
    font-weight: ${theme.fontWeight.regular};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${theme.space[6]};
  text-align: left;
`;

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition:
    transform 0.2s ease-out,
    box-shadow 0.2s ease-out;
  :hover {
    transform: translateY(-4px);
    -webkit-box-shadow: 0px 4px 20px 4px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 4px 20px 4px rgba(0, 0, 0, 0.15);
  }
`;

const CardHeader = styled.div`
  background-color: ${theme.color.tertiary};
  padding: ${theme.space[6]};
  display: flex;
  align-items: flex-end;
  min-height: 100px;
`;

const AppName = styled.h3`
  color: ${theme.color.wh};
  font-size: 22px;
  margin: 0;
`;

const CardBody = styled.div`
  padding: ${theme.space[5]};
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
`;

const Tag = styled.span`
  font-size: 11px;
  font-weight: ${theme.fontWeight.semiBold};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background-color: ${theme.color.primary};
  color: ${theme.color.tertiary};
  border-radius: 4px;
  padding: 3px ${theme.space[2]};
`;

const Description = styled.p`
  font-size: 15px;
  line-height: 1.5;
  color: #444;
  margin: 0 0 20px 0;
  flex: 1;
`;

const OpenLink = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: ${theme.fontSize.md};
  font-weight: ${theme.fontWeight.semiBold};
  color: ${theme.color.tertiary};
  svg {
    font-size: 16px;
  }
`;

export const AppShowcase = ({
  heading,
  subheading,
  apps,
}: AppShowcaseProps) => (
  <Section>
    <h2>{heading}</h2>
    {subheading && <h3>{subheading}</h3>}
    <Grid>
      {apps.map((app) => (
        <Card key={app.href} href={app.href} aria-label={`Open ${app.name}`}>
          <CardHeader>
            <AppName>{app.name}</AppName>
          </CardHeader>
          <CardBody>
            {app.tags && app.tags.length > 0 && (
              <Tags>
                {app.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </Tags>
            )}
            <Description>{app.description}</Description>
            <OpenLink>
              Open app <ArrowForwardIcon />
            </OpenLink>
          </CardBody>
        </Card>
      ))}
    </Grid>
  </Section>
);

export type { AppShowcaseProps, App } from "./types";

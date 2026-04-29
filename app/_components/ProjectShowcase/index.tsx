"use client";
import styled from "@emotion/styled";
import { theme } from "@/components/Theme";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { ProjectShowcaseProps } from "./types";

const Section = styled.section`
  margin: 0 64px;
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
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: ${theme.space[6]};
  text-align: left;
`;

const Card = styled.a`
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
  cursor: pointer;
  :hover {
    transform: translateY(-4px);
    -webkit-box-shadow: 0px 4px 20px 4px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 4px 20px 4px rgba(0, 0, 0, 0.15);
  }
`;

const BrowserBar = styled.div`
  background-color: ${theme.color.lightAccent};
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

const BrowserDots = styled.div`
  display: flex;
  gap: 5px;
  flex-shrink: 0;
  span {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    display: block;
  }
  span:nth-child(1) {
    background-color: #fc635d;
  }
  span:nth-child(2) {
    background-color: #fdbc40;
  }
  span:nth-child(3) {
    background-color: #35cd4b;
  }
`;

const BrowserUrl = styled.div`
  background-color: white;
  border-radius: 4px;
  flex: 1;
  padding: 3px 10px;
  font-size: 11px;
  color: ${theme.color.tertiary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid rgba(0, 0, 0, 0.08);
`;

const Screenshot = styled.div`
  height: 200px;
  overflow: hidden;
  background-color: ${theme.color.primary};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    display: block;
  }
`;

const CardBody = styled.div`
  padding: 20px 24px 24px 24px;
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
  padding: 3px 8px;
`;

const ProjectName = styled.h3`
  font-size: 20px;
  margin: 0 0 ${theme.space[2]} 0;
`;

const Description = styled.p`
  font-size: 15px;
  line-height: 1.5;
  color: #444;
  margin: 0 0 20px 0;
  flex: 1;
`;

const VisitLink = styled.div`
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

export const ProjectShowcase = ({
  heading,
  subheading,
  projects,
}: ProjectShowcaseProps) => (
  <Section>
    <h2>{heading}</h2>
    {subheading && <h3>{subheading}</h3>}
    <Grid>
      {projects.map((project) => (
        <Card
          key={project.siteUrl}
          href={project.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.name} website`}
        >
          <BrowserBar>
            <BrowserDots>
              <span />
              <span />
              <span />
            </BrowserDots>
            <BrowserUrl>
              {project.siteUrl.replace(/^https?:\/\//, "")}
            </BrowserUrl>
          </BrowserBar>
          <Screenshot>
            <img src={project.imageUrl} alt={`Screenshot of ${project.name}`} />
          </Screenshot>
          <CardBody>
            {project.tags && project.tags.length > 0 && (
              <Tags>
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </Tags>
            )}
            <ProjectName>{project.name}</ProjectName>
            <Description>{project.description}</Description>
            <VisitLink>
              Visit site <OpenInNewIcon />
            </VisitLink>
          </CardBody>
        </Card>
      ))}
    </Grid>
  </Section>
);

export type { ProjectShowcaseProps, Project } from "./types";

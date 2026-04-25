export interface Project {
  name: string;
  description: string;
  imageUrl: string;
  siteUrl: string;
  tags?: string[];
}

export interface ProjectShowcaseProps {
  heading: string;
  subheading?: string;
  projects: Project[];
}

export interface App {
  name: string;
  description: string;
  href: string;
  tags?: string[];
}

export interface AppShowcaseProps {
  heading: string;
  subheading?: string;
  apps: App[];
}

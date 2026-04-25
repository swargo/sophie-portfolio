export interface ProcessStep {
  title: string;
  description: string;
}

export interface ProcessProps {
  heading: string;
  steps: ProcessStep[];
}

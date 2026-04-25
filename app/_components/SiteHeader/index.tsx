"use client";
import styled from "@emotion/styled";
import { theme } from "../Theme";

const Header = styled.header`
  display: flex;
  align-items: baseline;
  gap: ${theme.space[3]};
  padding: ${theme.space[4]} ${theme.space[5]} ${theme.space[1]}
    ${theme.space[5]};
`;

const Name = styled.span`
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.semiBold};
  letter-spacing: 0.01em;
`;

const Role = styled.span`
  font-size: ${theme.fontSize.md};
  color: #666;
  letter-spacing: 0.02em;
`;

export const SiteHeader = () => (
  <Header>
    <Name>Sophie Wargo</Name>
    <Role>Web Developer & Designer</Role>
  </Header>
);

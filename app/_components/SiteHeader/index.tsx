"use client";
import styled from "@emotion/styled";
import NextLink from "next/link";
import { theme } from "../Theme";

const HeaderLink = styled(NextLink)`
  display: flex;
  align-items: baseline;
  gap: ${theme.space[3]};
  padding: ${theme.space[4]} ${theme.space[5]} ${theme.space[1]}
    ${theme.space[5]};
  text-decoration: none;
  color: inherit;
`;

const Name = styled.span`
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.semiBold};
`;

const Role = styled.span`
  font-size: ${theme.fontSize.md};
  color: #666;
`;

export const SiteHeader = () => (
  <header>
    <HeaderLink href="/">
      <Name>Sophie Wargo</Name>
      <Role>Web Developer & Designer</Role>
    </HeaderLink>
  </header>
);

"use client";
import styled from "@emotion/styled";

const Layer = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`;

export const BackgroundDecorations = () => (
  <Layer aria-hidden="true">
    {/* top-right: three concentric rings */}
    <svg
      style={{ position: "absolute", top: -160, right: -160 }}
      width="560"
      height="560"
      viewBox="0 0 560 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="280"
        cy="280"
        r="270"
        stroke="#4B6B94"
        strokeWidth="1.5"
        opacity="0.05"
      />
      <circle
        cx="280"
        cy="280"
        r="195"
        stroke="#4B6B94"
        strokeWidth="1"
        opacity="0.05"
      />
      <circle
        cx="280"
        cy="280"
        r="120"
        stroke="#4B6B94"
        strokeWidth="1"
        opacity="0.05"
      />
    </svg>

    {/* bottom-left: two peach rings */}
    <svg
      style={{ position: "absolute", bottom: -130, left: -110 }}
      width="460"
      height="460"
      viewBox="0 0 460 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="230"
        cy="230"
        r="220"
        stroke="#4B6B94"
        strokeWidth="2"
        opacity="0.05"
      />
      <circle
        cx="230"
        cy="230"
        r="150"
        stroke="#4B6B94"
        strokeWidth="1.5"
        opacity="0.05"
      />
    </svg>

    {/* mid-left: dot cluster */}
    <svg
      style={{ position: "absolute", left: "7%", top: "42%" }}
      width="88"
      height="132"
      viewBox="0 0 88 132"
      fill="#4B6B94"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="16" r="5" opacity="0.05" />
      <circle cx="36" cy="8" r="4" opacity="0.05" />
      <circle cx="64" cy="20" r="6" opacity="0.05" />
      <circle cx="20" cy="50" r="4" opacity="0.05" />
      <circle cx="52" cy="44" r="7" opacity="0.05" />
      <circle cx="10" cy="80" r="5" opacity="0.05" />
      <circle cx="40" cy="88" r="4" opacity="0.05" />
      <circle cx="70" cy="74" r="5" opacity="0.05" />
      <circle cx="26" cy="116" r="4" opacity="0.05" />
      <circle cx="60" cy="112" r="6" opacity="0.05" />
    </svg>

    {/* mid-right: diamond outline */}
    <svg
      style={{ position: "absolute", right: "6%", top: "52%" }}
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="6"
        y="6"
        width="60"
        height="60"
        stroke="##4B6B94"
        strokeWidth="2"
        opacity="0.05"
        transform="rotate(45 36 36)"
      />
    </svg>

    {/* upper-left: small cross */}
    <svg
      style={{ position: "absolute", left: "18%", top: "14%" }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="12"
        y1="0"
        x2="12"
        y2="24"
        stroke="#4B6B94"
        strokeWidth="1.5"
        opacity="0.05"
      />
      <line
        x1="0"
        y1="12"
        x2="24"
        y2="12"
        stroke="#4B6B94"
        strokeWidth="1.5"
        opacity="0.05"
      />
    </svg>

    {/* lower-right: small cross */}
    <svg
      style={{ position: "absolute", right: "20%", bottom: "22%" }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="12"
        y1="0"
        x2="12"
        y2="24"
        stroke="#4B6B94"
        strokeWidth="1.5"
        opacity="0.05"
      />
      <line
        x1="0"
        y1="12"
        x2="24"
        y2="12"
        stroke="#4B6B94"
        strokeWidth="1.5"
        opacity="0.05"
      />
    </svg>
  </Layer>
);

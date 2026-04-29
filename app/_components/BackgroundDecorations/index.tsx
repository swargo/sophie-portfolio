import styles from "./styles.module.css";

export const BackgroundDecorations = () => (
  <div className={styles.layer} aria-hidden="true">
    {/* top-right: three rings */}
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

    {/* bottom-left: two rings */}
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
  </div>
);

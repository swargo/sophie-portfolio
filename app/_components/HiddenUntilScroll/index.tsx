import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

const Hide = styled.div<any>`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible ? "translateY(0)" : "translateY(100px)"};
  transition: opacity 0.8s ease-out, transform 0.5s ease-out;
`;

export const HiddenUntilScroll = ({ children }: any) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isVisibleRef = useRef(false);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const setVisible = (val: boolean) => {
      isVisibleRef.current = val;
      setIsVisible(val);
    };

    const startObserving = () => {
      observerRef.current?.disconnect();
      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setVisible(true);
            observerRef.current?.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      if (elementRef.current) {
        observerRef.current.observe(elementRef.current);
      }
    };

    startObserving();

    const handleScroll = () => {
      if (window.scrollY < 50 && isVisibleRef.current) {
        setVisible(false);
        resetTimerRef.current = setTimeout(startObserving, 600);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener("scroll", handleScroll);
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, []);

  return (
    <Hide ref={elementRef} isVisible={isVisible}>
      {children}
    </Hide>
  );
};

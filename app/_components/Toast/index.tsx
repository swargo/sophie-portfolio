"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";

interface ToastProps {
  message: string;
  duration?: number;
}

export const Toast = ({ message, duration = 5000 }: ToastProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div className={`${styles.toast} ${visible ? "" : styles.hidden}`}>
      {message}
    </div>
  );
};

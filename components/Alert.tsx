import { clsx } from "clsx";

import styles from "./alert.module.css";

type AlertProps = {
  children: React.ReactNode;
  type: string;
};

export default function Alert({ children, type }: AlertProps) {
  return (
    <div
      className={clsx({
        [styles.success]: type === "success",
        [styles.error]: type === "error",
      })}
    >
      {children}
    </div>
  );
}

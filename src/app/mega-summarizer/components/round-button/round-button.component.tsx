import styles from "./round-button.module.css";

interface RoundButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  customClassName?: string;
}

export default function RoundButton({
  children,
  customClassName,
  ...rest
}: RoundButtonProps) {
  return (
    <button
      className={`button is-primary is-rounded ${styles.custom_is_round} ${customClassName || ""}`}
      {...rest}
    >
      {children}
    </button>
  );
}

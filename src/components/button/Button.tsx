import React from "react";

type Props = {
  children: React.ReactNode;
  type?: "primary" | "secondary" | "small" | "large" | "slugift";
  size?: "small" | "large";
  onClick: (e: any) => void;
};

function Button({
  children,
  type = "primary",
  size = "large",
  onClick,
}: Props) {
  return (
    <button
      className={`c-button c-button--${type} c-button--${size}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

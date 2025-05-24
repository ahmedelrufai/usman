import React from "react";

type Props = {
  label: string;
  className?: string;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  icon?: React.ReactNode;
};

const SecondaryButton = ({
  icon,
  onClick,
  label,
  variant = "primary",
  className = "",
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center cursor-pointer bg-[#EEECE9] ${
        variant === "secondary" ? "text-blue" : "text-primary-orange"
      } text-white text-sm px-6 pt-3 pb-2.5 rounded-full font-medium ${className}`}
    >
      {icon && icon}
      {label}
    </button>
  );
};

export default SecondaryButton;

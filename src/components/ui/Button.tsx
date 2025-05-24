import React from "react";

type Props = {
  label: string;
  className?: string;
  variant?: "primary" | "secondary" | "blue";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  icon?: React.ReactNode;
  hideOnMobile?: boolean;
};

const Button = ({
  icon,
  onClick,
  label,
  variant = "primary",
  className = "",
  hideOnMobile = false,
}: Props) => {
  return (
    <div className={`${hideOnMobile ? "hidden md:block" : ""}`}>
      <button
        onClick={onClick}
        className={`flex items-center cursor-pointer ${
          variant === "secondary"
            ? "bg-white border border-[#07567F] text-blue"
            : variant === "blue"
            ? "bg-blue"
            : "bg-primary-orange"
        } text-white px-6 pt-3 pb-2.5 rounded-full font-semibold ${className}`}
      >
        {icon && icon}
        {label}
      </button>
    </div>
  );
};

export default Button;

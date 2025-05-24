import React from "react";

type Props = {
  label: string;
  className?: string;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  icon?: React.ReactNode;
};

const OrangeButton = ({
  icon,
  onClick,
  label,
  variant = "primary",
  className = "",
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center cursor-pointer ${
        variant === "secondary"
          ? "bg-white border border-[#07567F] text-blue"
          : "bg-[#EEECE9] text-primary-orange"
      } text-white text-sm px-6 pt-3 pb-2.5 rounded-full font-semibold ${className}`}
    >
      {icon && icon}
      {label}
    </button>
  );
};

export default OrangeButton;

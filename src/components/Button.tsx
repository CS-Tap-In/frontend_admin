"use client";

type Prop = {
  value: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
};

export default function Button({
  value,
  onClick,
  disabled = false,
  className,
}: Prop) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${
        disabled ? "bg-tapGrey" : "bg-tapYellow"
      } h-10 rounded-2xl px-3 font-bold pt-1 ${className}`}
    >
      {value}
    </button>
  );
}

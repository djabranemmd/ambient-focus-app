function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}) {
  const variants = {
    primary:
      "bg-purple-600 hover:bg-purple-500",
    secondary:
      "bg-white/10 hover:bg-white/15",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-5
        py-3
        rounded-xl
        transition
        flex
        items-center
        justify-center
        gap-2
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        theme-card
        backdrop-blur-xl
        rounded-[32px]
        p-6
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;
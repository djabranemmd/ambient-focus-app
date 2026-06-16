function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}) {

  const variants = {

    primary:
      `
      bg-purple-600
      hover:bg-purple-500
      text-white
      shadow-lg
      shadow-purple-500/20
      `,


    secondary:
      `
      theme-bg
      theme-border
      border
      theme-text
      hover:opacity-80
      `,

  };


  return (

    <button

      type={type}

      onClick={onClick}

      className={`
        px-5
        py-3

        rounded-xl

        transition-all
        duration-300

        flex
        items-center
        justify-center

        gap-2

        font-medium

        ${variants[variant]}

        ${className}

        focus:outline-none
        focus:ring-2
        focus:ring-purple-500/50
      `}

    >

      {children}

    </button>

  );

}


export default Button;
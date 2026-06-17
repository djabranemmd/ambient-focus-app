import {
  forwardRef,
} from "react";


const Button = forwardRef(
(
  {
    children,
    onClick,
    variant = "primary",
    className = "",
    type = "button",
  },
  ref
) => {


  const variants = {

    primary:
      `
      bg-purple-600
      hover:bg-purple-500
      shadow-lg
      shadow-purple-500/20
      `,


    secondary:
      `
      bg-black/10
      dark:bg-white/10

      hover:bg-black/20
      dark:hover:bg-white/15
      `,

  };



  return (

    <button

      ref={ref}

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

        active:scale-95

        hover:-translate-y-0.5

        focus:outline-none

        focus:ring-2
        focus:ring-purple-500/50

        disabled:opacity-50
        disabled:pointer-events-none

        ${variants[variant]}

        ${className}
      `}

    >

      {children}

    </button>

  );

});


Button.displayName =
  "Button";


export default Button;
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
    disabled = false,
    ariaLabel,
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

      disabled={disabled}

      aria-label={ariaLabel}

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

        focus-visible:ring-2

        focus-visible:ring-purple-500/70

        focus-visible:ring-offset-2



        disabled:opacity-50

        disabled:cursor-not-allowed



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
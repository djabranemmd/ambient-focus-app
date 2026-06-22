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

    loading = false,

    ...props

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
        text-white
      `,



    secondary:
      `
        bg-black/10
        dark:bg-white/10

        hover:bg-black/20
        dark:hover:bg-white/15
      `,



    ghost:
      `
        bg-transparent

        hover:bg-black/10

        dark:hover:bg-white/10
      `,



  };






  const selectedVariant =
    variants[variant] ??
    variants.primary;






  return (


    <button


      ref={ref}



      type={type}



      onClick={onClick}



      disabled={
        disabled ||
        loading
      }



      aria-label={
        ariaLabel
      }



      aria-disabled={
        disabled ||
        loading
      }



      aria-busy={
        loading
      }



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

        disabled:pointer-events-none



        ${selectedVariant}



        ${className}


      `}



      {...props}


    >


      {
        loading
        ?

        (
          <span
            className="
              animate-pulse
            "
          >
            Loading...
          </span>
        )

        :

        children
      }


    </button>


  );


});




Button.displayName =
  "Button";



export default Button;
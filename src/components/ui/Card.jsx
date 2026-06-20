import {
  motion,
  useReducedMotion,
} from "framer-motion";


function Card({
  children,
  className = "",
}) {


  const shouldReduceMotion =
    useReducedMotion();



  return (

    <motion.div


      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 20,
            }
      }



      animate={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
            }
      }



      transition={{
        duration:
          shouldReduceMotion
            ? 0
            : 0.4,

        ease:
          "easeOut",
      }}



      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -4,
            }
      }



      className={`

        rounded-[32px]

        p-6


        transition-all

        duration-300



        bg-white/5

        dark:bg-white/5



        backdrop-blur-xl



        border



        border-black/10

        dark:border-white/10



        shadow-lg

        shadow-black/5



        hover:shadow-xl



        ${className}

      `}

    >

      {children}

    </motion.div>

  );

}


export default Card;
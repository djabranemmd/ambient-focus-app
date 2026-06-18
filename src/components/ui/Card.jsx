import {
  motion,
  useReducedMotion,
} from "framer-motion";



function Card({
  children,
  className = "",
}) {


  const reduceMotion =
    useReducedMotion();



  return (


    <motion.div


      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 20,
            }
      }



      animate={
        reduceMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
            }
      }



      transition={

        reduceMotion
          ? {
              duration: 0,
            }
          :
            {
              duration: 0.4,
              ease: "easeOut",
            }

      }



      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -2,
            }
      }



      className={`

        rounded-[32px]


        p-6



        transition-all

        duration-300



        theme-card



        backdrop-blur-xl



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
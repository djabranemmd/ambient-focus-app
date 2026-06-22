import {
  motion,
  useReducedMotion,
} from "framer-motion";




function Card({

  children,

  className = "",

  hover = true,

  animate = true,

  role,

  ariaLabel,

}) {



  const shouldReduceMotion =
    useReducedMotion();






  const enableMotion =
    animate &&
    !shouldReduceMotion;






  return (


    <motion.div



      initial={
        enableMotion
          ?
          {
            opacity: 0,
            y: 20,
          }
          :
          false
      }




      animate={
        enableMotion
          ?
          {
            opacity: 1,
            y: 0,
          }
          :
          undefined
      }




      transition={{

        duration:
          enableMotion
            ?
            0.4
            :
            0,


        ease:
          "easeOut",

      }}




      whileHover={

        hover &&
        enableMotion

        ?

        {
          y: -4,
        }

        :

        undefined

      }





      role={
        role
      }



      aria-label={
        ariaLabel
      }



      className={`

        rounded-[32px]

        p-6



        transition-all

        duration-300




        theme-card



        backdrop-blur-xl




        border

        theme-border




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
import {
  motion,
  useReducedMotion,
} from "framer-motion";





function SectionTitle({

  title,

  subtitle,

  className = "",

  id,

}) {



  const shouldReduceMotion =
    useReducedMotion();






  const enableMotion =
    !shouldReduceMotion;






  return (


    <motion.div



      initial={
        enableMotion

          ?

          {
            opacity: 0,
            y: 10,
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
            ? 0.25
            : 0,


        ease:
          "easeOut",

      }}




      aria-hidden="false"



      className={`

        mb-6

        ${className}

      `}


    >






      <h2


        id={id}


        className="

          text-2xl

          sm:text-3xl


          font-bold


          tracking-tight


          leading-tight



          theme-text



          transition-colors

          duration-300

        "


      >

        {title}


      </h2>








      {
        subtitle && (


          <p


            className="

              theme-text-muted


              mt-2


              max-w-2xl



              text-sm

              sm:text-base



              leading-relaxed



              transition-colors

              duration-300


            "


          >

            {subtitle}


          </p>


        )
      }





    </motion.div>


  );

}



export default SectionTitle;
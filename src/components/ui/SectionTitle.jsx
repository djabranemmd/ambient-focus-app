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





  return (


    <motion.div



      initial={
        shouldReduceMotion
          ?
          false
          :
          {
            opacity: 0,
            y: 10,
          }
      }



      animate={
        shouldReduceMotion
          ?
          undefined
          :
          {
            opacity: 1,
            y: 0,
          }
      }



      transition={{

        duration:
          shouldReduceMotion
            ?
            0
            :
            0.3,

        ease:
          "easeOut",

      }}




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
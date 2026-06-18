import {
  CheckCircle,
  X,
} from "lucide-react";


import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";



function CompletionToast({
  show,
  onClose,
  duration,
}) {


  const reduceMotion =
    useReducedMotion();



  const minutes =
    Math.floor(
      duration / 60
    );



  return (


    <AnimatePresence>



      {
        show && (


          <motion.div


            role="alert"



            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 40,
                    scale: 0.95,
                  }
            }



            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }
            }



            exit={
              reduceMotion
                ? undefined
                : {
                    opacity: 0,
                    x: 40,
                    scale: 0.95,
                  }
            }



            transition={
              reduceMotion
                ? {
                    duration: 0,
                  }
                : {
                    duration: 0.3,
                    ease: "easeOut",
                  }
            }



            className="
              fixed

              top-4
              right-4

              sm:top-6
              sm:right-6

              z-[100]

              w-[calc(100%-2rem)]

              max-w-sm

            "


          >



            <div


              className="
                rounded-3xl

                theme-card

                backdrop-blur-2xl

                shadow-2xl

                p-5

                flex

                gap-4

                items-start


                transition-all

                duration-300

              "


            >




              <div


                className="
                  h-10

                  w-10

                  rounded-2xl

                  bg-green-500/20

                  flex

                  items-center

                  justify-center

                  shrink-0
                "


              >



                <CheckCircle

                  className="
                    text-green-500
                  "

                  size={22}

                />



              </div>





              <div

                className="
                  flex-1
                "

              >



                <h3

                  className="
                    font-semibold

                    text-lg

                    theme-text
                  "

                >

                  Great Focus 🎉


                </h3>




                <p

                  className="
                    text-sm

                    theme-text-muted

                    mt-1
                  "

                >

                  Session completed ({minutes} min)


                </p>




              </div>







              <button


                onClick={onClose}



                aria-label="
                  Close focus completion notification
                "



                className="

                  theme-text-muted


                  hover:text-purple-500


                  transition-all


                  duration-300


                  hover:scale-110



                  focus-visible:outline-none


                  focus-visible:ring-2


                  focus-visible:ring-purple-500/50


                  rounded-lg

                "


              >



                <X
                  size={18}
                />


              </button>




            </div>



          </motion.div>


        )
      }



    </AnimatePresence>

  );

}


export default CompletionToast;
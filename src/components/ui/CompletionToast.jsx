import {
  CheckCircle,
  X,
} from "lucide-react";


function CompletionToast({
  show,
  onClose,
  duration,
}) {


  if (!show)
    return null;



  const minutes =
    Math.floor(
      duration / 60
    );



  return (

    <div
      className="
        fixed

        top-6
        right-6

        z-[100]

        animate-slide-in
      "
    >


      <div

        className="
          w-80

          rounded-3xl

          theme-card

          backdrop-blur-2xl

          shadow-2xl

          p-5

          flex

          gap-4

          items-start

          transition-colors

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

            Session completed
            {" "}
            ({minutes} min)

          </p>



        </div>






        <button

          onClick={onClose}

          aria-label="Close notification"

          className="
            theme-text-muted

            hover:text-purple-500

            transition

            focus:outline-none

            focus:ring-2

            focus:ring-purple-500/50

            rounded-lg
          "

        >


          <X
            size={18}
          />


        </button>



      </div>



    </div>

  );

}


export default CompletionToast;
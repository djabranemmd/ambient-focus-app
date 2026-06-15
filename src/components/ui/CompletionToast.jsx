import {
  CheckCircle,
  X,
} from "lucide-react";


function CompletionToast({
  show,
  onClose,
  duration,
}) {

  if (!show) return null;


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
          border
          border-white/10
          bg-black/40
          backdrop-blur-2xl
          shadow-2xl
          p-5
          flex
          gap-4
          items-start
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
              text-green-400
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
            "
          >
            Great Focus 🎉
          </h3>


          <p
            className="
              text-sm
              text-gray-400
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
          className="
            text-gray-400
            hover:text-white
            transition
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
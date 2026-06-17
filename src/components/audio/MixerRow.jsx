import {
  memo,
} from "react";

import {
  Play,
  Pause,
  AlertCircle,
} from "lucide-react";



function MixerRow({
  sound,
  isPlaying,
  volume,
  onToggle,
  onVolumeChange,
  disabled = false,
}) {


  return (

    <div

      className="
        flex
        flex-col
        sm:flex-row
        sm:items-center

        gap-4

        py-5

        rounded-2xl

        px-3

        transition-all
        duration-300

        hover:bg-black/5
        dark:hover:bg-white/5
      "

    >



      {/* Sound Info */}


      <div

        className="
          flex
          items-center
          gap-3
          flex-1
          min-w-0
        "

      >


        <div

          className="
            w-12
            h-12

            rounded-2xl

            bg-purple-500/10

            flex
            items-center
            justify-center

            text-2xl

            shrink-0
          "

        >

          {sound.emoji}


        </div>




        <div
          className="
            min-w-0
          "
        >


          <p

            className="
              font-medium
              truncate
              theme-text
            "

          >

            {sound.name}


          </p>




          <p

            className="
              text-xs
              theme-text-muted
              mt-1
            "

          >

            {
              disabled
                ? "Unavailable"
                : "Ambient sound"
            }


          </p>


        </div>



      </div>







      {/* Play Button */}


      <button


        onClick={onToggle}


        disabled={disabled}


        aria-label={

          disabled

            ? `${sound.name} unavailable`

            :

            isPlaying

              ? `Pause ${sound.name}`

              : `Play ${sound.name}`

        }


        aria-disabled={disabled}



        className={`

          h-11

          w-11


          rounded-full


          flex

          items-center

          justify-center


          shrink-0


          transition-all

          duration-300



          focus:outline-none

          focus:ring-2

          focus:ring-purple-500/50



          ${
            disabled

              ?

              `
              bg-gray-500/20

              text-gray-400

              cursor-not-allowed
              `


              :


              isPlaying


                ?

                `
                bg-purple-500

                shadow-lg

                shadow-purple-500/30

                scale-105

                animate-pulse
                `


                :

                `
                bg-purple-600

                hover:bg-purple-500

                hover:scale-105

                active:scale-90

                `
          }


        `}


      >


        {
          disabled ? (

            <AlertCircle
              size={18}
            />

          ) :


          isPlaying ? (

            <Pause
              size={18}
            />

          ) : (

            <Play
              size={18}
            />

          )

        }


      </button>









      {/* Volume Control */}


      <div

        className="
          flex
          items-center
          gap-3

          flex-1

          min-w-0
        "

      >



        <input


          type="range"


          min="0"


          max="1"


          step="0.01"


          value={volume}



          disabled={disabled}



          onChange={(e) =>

            onVolumeChange(

              Number(
                e.target.value
              )

            )

          }



          aria-label={
            `${sound.name} volume`
          }



          className={`

            audio-slider

            flex-1

            cursor-pointer


            ${
              disabled
                ? "opacity-40 cursor-not-allowed"
                : ""
            }

          `}


        />






        <span

          className="
            w-14

            text-right

            text-sm

            theme-text-muted

            transition-colors

            duration-300
          "

        >

          {
            Math.round(
              volume * 100
            )
          }%


        </span>



      </div>




    </div>


  );

}


export default memo(MixerRow);
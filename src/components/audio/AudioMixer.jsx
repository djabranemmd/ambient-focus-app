import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { sounds } from "../../data/sounds";

import MixerRow from "./MixerRow";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";


function AudioMixer() {

  const audioRefs = useRef({});


  const [volumes, setVolumes] =
    useState({});


  const [playing, setPlaying] =
    useState({});




  useEffect(() => {


    const initialVolumes = {};

sounds.forEach((sound) => {

  const audio =
    new Audio(sound.file);


  audio.loop = true;

  audio.volume = 0.5;


  audioRefs.current[sound.id] =
    audio;


  initialVolumes[sound.id] = 0.5;

});


setVolumes(initialVolumes);



    return () => {


      Object.values(
        audioRefs.current
      ).forEach((audio) => {

        audio.pause();

        audio.src = "";

      });


      audioRefs.current = {};


    };


  }, []);





  const toggleSound = useCallback(async (id) => {


    const audio =
      audioRefs.current[id];


    if (!audio)
      return;



    try {


      if (playing[id]) {


        audio.pause();


        setPlaying((prev)=>({
          ...prev,
          [id]: false,
        }));


      } else {


        await audio.play();


        setPlaying((prev)=>({
          ...prev,
          [id]: true,
        }));


      }



    } catch(error) {


      console.error(
        "Audio playback failed:",
        error
      );


      setPlaying((prev)=>({
        ...prev,
        [id]: false,
      }));

    }


  }, [playing]);





  const changeVolume = useCallback(
(
  id,
  value
) => {


    const audio =
      audioRefs.current[id];


    if (!audio)
      return;


    audio.volume =
      value;



    setVolumes((prev)=>({
      ...prev,
      [id]: value,
    }));


  },
[]
);






  return (

    <section className="mt-10">


      <SectionTitle

        title="Ambient Mixer"

        subtitle="Blend sounds to create your perfect environment."

      />



      <Card>


        <div
          className="
            divide-y
            divide-white/10
          "
        >


          {sounds.map((sound)=>(


            <MixerRow

              key={sound.id}


              sound={sound}


              isPlaying={
                playing[sound.id]
              }


              volume={
                volumes[sound.id] ?? 0.5
              }


              onToggle={() =>
  toggleSound(sound.id)
}


              onVolumeChange={(value)=>
                changeVolume(
                  sound.id,
                  value
                )
              }


            />


          ))}



        </div>


      </Card>


    </section>

  );

}


export default AudioMixer;
import { useEffect, useRef, useState } from "react";

import { sounds } from "../../data/sounds";
import MixerRow from "./MixerRow";

function AudioMixer() {
  const audioRefs = useRef({});

  const [volumes, setVolumes] =
    useState({});

  const [playing, setPlaying] =
    useState({});

  useEffect(() => {
    sounds.forEach((sound) => {
      const audio = new Audio(
        sound.file
      );

      audio.loop = true;
      audio.volume = 0.5;

      audioRefs.current[
        sound.id
      ] = audio;
    });

    return () => {
      Object.values(
        audioRefs.current
      ).forEach((audio) =>
        audio.pause()
      );
    };
  }, []);

  const toggleSound =
    async (id) => {
      const audio =
        audioRefs.current[id];

      if (!audio) return;

      if (playing[id]) {
        audio.pause();

        setPlaying((prev) => ({
          ...prev,
          [id]: false,
        }));
      } else {
        await audio.play();

        setPlaying((prev) => ({
          ...prev,
          [id]: true,
        }));
      }
    };

  const changeVolume = (
    id,
    value
  ) => {
    const audio =
      audioRefs.current[id];

    if (!audio) return;

    audio.volume = value;

    setVolumes((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <section className="mt-10">
      <div
        className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-[32px]
          p-8
        "
      >
        <div className="mb-8">
          <h2 className="text-3xl font-bold">
            Ambient Mixer
          </h2>

          <p className="text-gray-400 mt-2">
            Blend sounds to create your
            perfect environment.
          </p>
        </div>

        <div>
          {sounds.map((sound) => (
            <MixerRow
              key={sound.id}
              sound={sound}
              isPlaying={
                playing[sound.id]
              }
              volume={
                volumes[
                  sound.id
                ] ?? 0.5
              }
              onToggle={() =>
                toggleSound(
                  sound.id
                )
              }
              onVolumeChange={(
                value
              ) =>
                changeVolume(
                  sound.id,
                  value
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AudioMixer;
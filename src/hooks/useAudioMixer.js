import { useCallback, useEffect, useRef, useState } from "react";
import { sounds } from "../data/sounds";

const STORAGE_KEY = "ambient-audio-settings";

export function useAudioMixer() {
  const audioRefs = useRef({});

  const [volumes, setVolumes] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      return saved ? JSON.parse(saved).volumes || {} : {};
    } catch (error) {
      console.error("Failed loading audio volumes:", error);
      return {};
    }
  });

  const [playing, setPlaying] = useState({});

  useEffect(() => {
    const initialVolumes = {};

    sounds.forEach((sound) => {
      const audio = new Audio(sound.file);

      audio.loop = true;

      const savedVolume = volumes[sound.id] ?? 0.5;

      audio.volume = savedVolume;

      audioRefs.current[sound.id] = audio;

      initialVolumes[sound.id] = savedVolume;
    });

    setVolumes(initialVolumes);

    return () => {
      Object.values(audioRefs.current).forEach((audio) => {
        audio.pause();
        audio.src = "";
      });

      audioRefs.current = {};
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ volumes }));
    } catch (error) {
      console.error("Failed saving audio settings:", error);
    }
  }, [volumes]);

  const toggleSound = useCallback(
    async (id) => {
      const audio = audioRefs.current[id];

      if (!audio) return;

      try {
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
      } catch (error) {
        console.error("Audio playback failed:", error);

        setPlaying((prev) => ({
          ...prev,
          [id]: false,
        }));
      }
    },
    [playing]
  );

  const changeVolume = useCallback((id, value) => {
    const audio = audioRefs.current[id];

    if (!audio) return;

    audio.volume = value;

    setVolumes((prev) => ({
      ...prev,
      [id]: value,
    }));
  }, []);

  return {
    volumes,
    playing,
    toggleSound,
    changeVolume,
  };
}

export default useAudioMixer;
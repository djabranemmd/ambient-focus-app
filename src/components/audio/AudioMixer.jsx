import { useAudioMixer } from "../../hooks/useAudioMixer";
import { sounds } from "../../data/sounds";
import MixerRow from "./MixerRow";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

function AudioMixer() {
  const { volumes, playing, toggleSound, changeVolume } = useAudioMixer();

  return (
    <section className="mt-10">
      <SectionTitle
        title="Ambient Mixer"
        subtitle="Blend sounds to create your perfect environment."
      />

      <Card>
        <div className="divide-y divide-white/10">
          {sounds.map((sound) => (
            <MixerRow
              key={sound.id}
              sound={sound}
              isPlaying={playing[sound.id]}
              volume={volumes[sound.id] ?? 0.5}
              onToggle={() => toggleSound(sound.id)}
              onVolumeChange={(value) => changeVolume(sound.id, value)}
            />
          ))}
        </div>
      </Card>
    </section>
  );
}

export default AudioMixer;
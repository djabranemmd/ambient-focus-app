import { Play, Pause } from "lucide-react";

function MixerRow({
  sound,
  isPlaying,
  volume,
  onToggle,
  onVolumeChange,
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-4
        py-4
        border-b
        border-white/5
      "
    >
      <div className="w-12 text-2xl">
        {sound.emoji}
      </div>

      <div className="w-32">
        <p className="font-medium">
          {sound.name}
        </p>
      </div>

      <button
        onClick={onToggle}
        className="
          h-10
          w-10
          rounded-full
          bg-purple-600
          flex
          items-center
          justify-center
          shrink-0
        "
      >
        {isPlaying ? (
          <Pause size={16} />
        ) : (
          <Play size={16} />
        )}
      </button>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) =>
          onVolumeChange(
            Number(e.target.value)
          )
        }
        className="flex-1"
      />

      <div className="w-14 text-right text-sm text-gray-400">
        {Math.round(volume * 100)}%
      </div>
    </div>
  );
}

export default MixerRow;
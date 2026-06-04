import { Play, Pause } from "lucide-react";

function AudioCard({
  sound,
  isPlaying,
  volume,
  onToggle,
  onVolumeChange,
}) {
  return (
    <div
      className="
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        rounded-3xl
        p-5
        transition-all
        hover:bg-white/10
      "
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="text-3xl">
            {sound.emoji}
          </div>

          <h3 className="mt-2 font-semibold text-lg">
            {sound.name}
          </h3>
        </div>

        <button
          onClick={onToggle}
          className="
            h-12
            w-12
            rounded-full
            bg-purple-600
            flex
            items-center
            justify-center
            hover:scale-105
            transition
          "
        >
          {isPlaying ? (
            <Pause size={18} />
          ) : (
            <Play size={18} />
          )}
        </button>
      </div>

      <div className="mt-5">
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
          className="w-full"
        />
      </div>

      <div className="mt-2 text-sm text-gray-400">
        Volume: {Math.round(volume * 100)}%
      </div>
    </div>
  );
}

export default AudioCard;
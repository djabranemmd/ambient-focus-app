import { memo } from "react";
import { Play, Pause } from "lucide-react";

function MixerRow({ sound, isPlaying, volume, onToggle, onVolumeChange }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 py-5 px-3 rounded-2xl transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5">
      {/* Sound Information */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-2xl shrink-0">
          {sound.emoji}
        </div>

        <div className="min-w-0">
          <p className="font-medium truncate theme-text">{sound.name}</p>
          <p className="text-xs theme-text-muted mt-1">Ambient sound</p>
        </div>
      </div>

      {/* Play / Pause Button */}
      <button
        onClick={onToggle}
        aria-label={isPlaying ? `Pause ${sound.name}` : `Play ${sound.name}`}
        className={`
          h-11 w-11 rounded-full
          flex items-center justify-center shrink-0
          transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-purple-500/50
          ${
            isPlaying
              ? "bg-purple-500 shadow-lg shadow-purple-500/30 scale-105 animate-pulse"
              : "bg-purple-600 hover:bg-purple-500 hover:scale-105 active:scale-90"
          }
        `}
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
      </button>

      {/* Volume */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => onVolumeChange(Number(e.target.value))}
          aria-label={`${sound.name} volume`}
          className="audio-slider flex-1 cursor-pointer"
        />

        <span className="w-14 text-right text-sm theme-text-muted">
          {Math.round(volume * 100)}%
        </span>
      </div>
    </div>
  );
}

export default memo(MixerRow);
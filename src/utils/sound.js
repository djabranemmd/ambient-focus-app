import completeSound from "../assets/sounds/complete.wav";

let completionAudio = null;

export function playCompletionSound() {
  try {
    if (!completionAudio) {
      completionAudio = new Audio(completeSound);
      completionAudio.volume = 0.8;
    }

    completionAudio.currentTime = 0;

    const playPromise = completionAudio.play();

    if (playPromise) {
      playPromise
        .then(() => {
          console.log("Completion sound played");
        })
        .catch((error) => {
          console.warn("Audio playback blocked:", error);
        });
    }
  } catch (error) {
    console.error("Failed playing completion sound:", error);
  }
}
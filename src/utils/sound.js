const completionSound =
  new Audio(
    "../assets/sounds/complete.wav"
  );


export function playCompletionSound() {

  completionSound.currentTime = 0;

  completionSound.play()
    .catch((error) => {
      console.log(
        "Sound playback blocked:",
        error
      );
    });

}
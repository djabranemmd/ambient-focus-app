export function playCompletionSound() {

  console.log(
    "Trying to play completion sound..."
  );


  const audio =
    new Audio(
      "src/assets/sounds/complete.wav"
    );


  audio.volume = 1;


  audio.oncanplaythrough = () => {

    console.log(
      "Audio loaded successfully"
    );

  };


  audio.onerror = (error) => {

    console.log(
      "Audio loading failed",
      error
    );

  };


  audio.play()
    .then(() => {

      console.log(
        "Audio playing"
      );

    })
    .catch((error) => {

      console.log(
        "Audio play blocked",
        error
      );

    });

}
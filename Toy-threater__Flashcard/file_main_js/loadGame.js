export function loadAssets(scene) {
    scene.load.image("background", "../assets/background.png");
    scene.load.image("card", "../assets/card.png");
    scene.load.audio("initial", "../assets/sound_initial.mp3");
    scene.load.audio("failure", "../assets/sound_failure.mp3");
    scene.load.audio("catch", "../assets/sound_catch.mp3");
    scene.load.audio("success", "../assets/sound_success.mp3");
    scene.load.spritesheet("sparkle", "../assets/sparkle.png", {
      frameWidth: 140,
      frameHeight: 160,
    });
    scene.load.spritesheet("characters", "../assets/cast2.png", {
      frameWidth: 563,
      frameHeight: 395,
    });
  }
// animations.js
export function createAnimations(scene) {
    scene.anims.create({
      key: "character-success",
      frames: [
        { key: "characters", frame: 0 },
        { key: "characters", frame: 7 },
        { key: "characters", frame: 8 },
      ],
      frameRate: 7,
      repeat: 0,
    });
  
    scene.anims.create({
        key: "character-fail",
        frames: [
          { key: "characters", frame: 5 },
          { key: "characters", frame: 6 },
        ],
        frameRate: FRAME_RATE,
        repeat: 0,
      });
  
    scene.anims.create({
        key: "character-catch",
        frames: [
          { key: "characters", frame: 3 },
          { key: "characters", frame: 4 },
          { key: "characters", frame: 2 },
          { key: "characters", frame: 1 },
          { key: "characters", frame: 0 },
        ],
        frameRate: FRAME_RATE,
        repeat: 0,
      });
  
    scene.anims.create({
        key: "character-wait",
        frames: [
          { key: "characters", frame: 4 },
          { key: "characters", frame: 3 },
        ],
        frameRate: FRAME_RATE,
        repeat: 0,
      });
  
    scene.anims.create({
        key: "sparkle",
        frames: this.anims.generateFrameNumbers("sparkle", { start: 0, end: 8 }),
        frameRate: FRAME_RATE,
        repeat: -1,
      });
  
    scene.characters = this.add.sprite(383, 435, "characters");
    scene.sparkles = this.add.sprite(385, 660, "sparkle");
  }

export function dropCardAnimation(onCompleteCallback, scene) {
    scene.mathContainer.setVisible(false);
    scene.waitAnimation();
    scene.tweens.add({
      targets: scene.card,
      y: 800,
      duration: 700,
      ease: "Quad.In",
      onComplete: () => {
        scene.card.y = -200;
        if (onCompleteCallback) onCompleteCallback();

        scene.tweens.add({
          targets: scene.card,
          y: 328,
          duration: 500,
          ease: "Linear",
          onComplete: () => {
            scene.catch.play();
            scene.mathContainer.setVisible(true);
          },
        });
      },
    });
}

export function catchAnimation(scene) {
    scene.characters.play("character-catch");
  }

export function waitAnimation(scene) {
    scene.characters.play("character-wait");
  }

export function successAnimation(scene) {
    scene.success.play();
    scene.characters.play("character-success");
  }

export function failureAnimation(scene) {
    scene.failure.play();
    scene.characters.play("character-fail");
  }
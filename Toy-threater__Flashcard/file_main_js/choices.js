export function updateChoice(scene) {
  const options = scene.generateOptions(this.correctAnswer);

  scene.answerButtons.forEach(({ txt }, index) => {
    txt.setText(options[index]);
  });
}

export function createChoice(options, scene) {
  scene.answerContainer = scene.add.container(0, 0);
  scene.answerButtons = [];
  if (!scene.answerContainer) {
    scene.answerContainer = scene.add.container(0, 0);
    scene.answerButtons = [];
  }
  for (let i = 0; i < RANDOM_COUNT_NUMBER; i++) {
    let xPos = 110 + i * 140;
    let yPos = 700;
    let width = 125;
    let height = 125;
    let radius = 20;

    let buttonGraphics = scene.add.graphics();
    buttonGraphics.fillStyle(0xffffff, 1);
    buttonGraphics.fillRoundedRect(
      -width / 2,
      -height / 2,
      width,
      height,
      radius
    );
    buttonGraphics.lineStyle(4, 0x000000);
    buttonGraphics.strokeRoundedRect(
      -width / 2,
      -height / 2,
      width,
      height,
      radius
    );

    let btn = scene.add.container(xPos, yPos, [buttonGraphics]);
    btn.setSize(width, height);
    btn.setInteractive({ useHandCursor: true });

    let txt = scene.add
      .text(xPos, yPos, `${options[i]}`, {
        fontSize: "48px",
        fontStyle: "bold",
        color: "#000",
      })
      .setOrigin(0.5);

    btn.on("pointerdown", () => {
      scene.checkAnswer(parseInt(txt.text));
      scene.clearChoices();

      scene.time.delayedCall(600, () => {
        scene.updateChoices();
      });
    });

    scene.answerContainer.add([btn, txt]);

    scene.answerButtons.push({ btn, txt });
  }
  scene.answerButtons.forEach((choice, index) => {
    choice.txt.setText(options[index]);
    choice.btn.setInteractive({ useHandCursor: true });
  });
}

export function clearChoice(scene) {
  if (scene.answerContainer) {
    scene.tweens.add({
      targets: scene.answerContainer.list,
      alpha: 0,
      scaleX: 0,
      scaleY: 0,
      duration: 500,
      onComplete: () => {
        scene.answerContainer.removeAll(true);
        scene.answerButtons = [];
      },
    });
  }
}

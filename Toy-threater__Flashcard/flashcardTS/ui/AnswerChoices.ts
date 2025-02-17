import Phaser from "phaser";

export class AnswerChoices {
  scene: Phaser.Scene;
  answerContainer: Phaser.GameObjects.Container;
  answerButtons: { btn: Phaser.GameObjects.Container; txt: Phaser.GameObjects.Text }[];

  constructor(scene: Phaser.Scene, options: number[], onSelect: (selected: number) => void) {
    this.scene = scene;
    this.answerContainer = scene.add.container(0, 0);
    this.answerButtons = [];

    for (let i = 0; i < options.length; i++) {
      let xPos = 110 + i * 140;
      let yPos = 700;
      let width = 125;
      let height = 125;
      let radius = 20;

      let buttonGraphics = scene.add.graphics();
      buttonGraphics.fillStyle(0xffffff, 1);
      buttonGraphics.fillRoundedRect(-width / 2, -height / 2, width, height, radius);
      buttonGraphics.lineStyle(4, 0x000000);
      buttonGraphics.strokeRoundedRect(-width / 2, -height / 2, width, height, radius);

      let btn = scene.add.container(xPos, yPos, [buttonGraphics]);
      btn.setSize(width, height);
      btn.setInteractive({ useHandCursor: true });

      let txt = scene.add.text(xPos, yPos, `${options[i]}`, {
        fontSize: "48px",
        fontStyle: "bold",
        color: "#000",
      }).setOrigin(0.5);

      btn.on("pointerdown", () => onSelect(parseInt(txt.text)));

      this.answerContainer.add([btn, txt]);
      this.answerButtons.push({ btn, txt });
    }
  }
}

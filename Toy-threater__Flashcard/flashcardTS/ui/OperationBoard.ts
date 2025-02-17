import Phaser from "phaser";

export class OperationBoard {
  scene: Phaser.Scene;
  operationBoard: Phaser.GameObjects.Container;
  currentOperatorType: string;
  currentSymbol: string;

  constructor(scene: Phaser.Scene, boardX: number, boardY: number, buttonSizeX: number, buttonSizeY: number, spacing: number) {
    this.scene = scene;
    this.operationBoard = scene.add.container(boardX, boardY);

    let operations = [
      { symbol: "+", type: "add" },
      { symbol: "-", type: "subtract" },
      { symbol: "×", type: "multiply" },
      { symbol: "÷", type: "divide" },
    ];

    let selectedButton: Phaser.GameObjects.Rectangle | null = null;

    operations.forEach((operation, index) => {
      let yOffset = index * (buttonSizeY + spacing);
      let button = scene.add.rectangle(0, yOffset, buttonSizeX, buttonSizeY, 0xffffff)
        .setStrokeStyle(2, 0x000000)
        .setOrigin(0, 0)
        .setInteractive({ useHandCursor: true });

      let text = scene.add.text(buttonSizeX / 2, yOffset + buttonSizeY / 2, operation.symbol, {
        fontSize: "48px",
        fontStyle: "bold",
        color: "#000",
      }).setOrigin(0.5);

      if (index === 0) {
        selectedButton = button;
        button.setFillStyle(0xfffacd);
        this.currentOperatorType = operation.type;
        this.currentSymbol = operation.symbol;
      }

      button.on("pointerdown", () => {
        if (selectedButton && selectedButton !== button) {
          selectedButton.setFillStyle(0xffffff);
        }

        selectedButton = button;
        button.setFillStyle(0xfffacd);

        this.currentOperatorType = operation.type;
        this.currentSymbol = operation.symbol;
      });

      this.operationBoard.add([button, text]);
    });

    scene.add.existing(this.operationBoard);
  }
}

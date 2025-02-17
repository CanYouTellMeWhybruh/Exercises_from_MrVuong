import Phaser from "phaser";
import { generateNumbers, calculateAnswer, generateOptions } from "../utils/mathUtils";
import { OperationBoard } from "../ui/OperationBoard";
import { AnswerChoices } from "../ui/AnswerChoices";
import { boardX, boardY, buttonSizeX, buttonSizeY, spacing } from "../utils/constants";

export class MathGame extends Phaser.Scene {
  constructor() {
    super({ key: "MathGame" });
  }

  create() {
    this.add.image(0, 0, "background").setOrigin(0, 0);

    const operationBoard = new OperationBoard(this, boardX, boardY, buttonSizeX, buttonSizeY, spacing);
    const [num1, num2] = generateNumbers(operationBoard.currentOperatorType);
    const correctAnswer = calculateAnswer(num1, num2, operationBoard.currentOperatorType);
    const options = generateOptions(correctAnswer);

    new AnswerChoices(this, options, (selected) => {
      console.log("Selected Answer:", selected);
    });
  }
}

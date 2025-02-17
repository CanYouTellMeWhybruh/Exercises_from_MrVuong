import { createAnimations, dropCardAnimation, catchAnimation, waitAnimation, successAnimation, failureAnimation } from "./animations.js";
import { loadAssets } from "./loadGame.js";
import { updateChoice, clearChoice, createChoice } from "./choices.js";
import { generateNumbers, calculateAnswer, generateOptions } from "./utils.js";
import { updateMathQuestion, checkAnswer } from "./questions.js";
import {
  RANDOM_COUNT_NUMBER,
  RANGE_MAX_NUMBER,
  RANGE_MIN_NUMBER,
  FRAME_RATE,
  HExA_BUTTON,
  WIDTH_SCENE,
  HEIGHT_SCENE,
} from "./constants.js";
import {
  createText,
  createCenteredText,
  createOperationBoard,
} from "./createInterfaces.js";

export class MathGame extends Phaser.Scene {
  constructor() {
    super({ key: "MathGame" });
    this.correctCount = 0;
    this.incorrectCount = 0;
    this.boardX = 10;
    this.boardY = 90;
    this.buttonSizeX = 110;
    this.buttonSizeY = 110;
    this.spacing = 0;
  }

  preload() {
    loadAssets(this);
  }

  create() {
    let bg = this.add.image(0, 0, "background").setOrigin(0, 0);
    bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

    this.initial = this.sound.add("initial");
    this.failure = this.sound.add("failure");
    this.catch = this.sound.add("catch");
    this.success = this.sound.add("success");

    this.card = this.add.image(385, -200, "card");

    this.incorrectText = createText(450, 16, "Incorrect: 0", this);
    this.correctText = createText(150, 16, "Correct: 0", this);

    // Tạo hoạt ảnh
    createAnimations(this);

    // Tạo phép toán
    this.questionTextNumber1 = createCenteredText(45, 0, "", this);
    this.questionTextNumber2 = createCenteredText(0, 70, "", this);
    this.tutorialText = createText(-170, -150, "Select an answer below", this);
    this.underline = createCenteredText(0, 90, "_____", this);
    this.answerText = createCenteredText(45, 170, "", this);

    // Tạo bảng tính
    createOperationBoard(
      this.boardX,
      this.boardY,
      this.buttonSizeX,
      this.buttonSizeY,
      this.spacing,
      this
    );

    // Tạo container trước khi sử dụng
    this.mathContainer = this.add.container(WIDTH_SCENE / 2, HEIGHT_SCENE / 2);

    // Thêm các phần tử vào container
    this.mathContainer.add([
      this.questionTextNumber1,
      this.questionTextNumber2,
      this.underline,
      this.answerText,
      this.tutorialText,
    ]);

    // Ẩn container ban đầu
    this.mathContainer.setVisible(false);

    // Hoạt ảnh ban đầu
    this.tweens.add({
      targets: this.card,
      y: 328,
      duration: 500,
      ease: "Linear",
      onComplete: () => {
        this.catch.play();
        this.initial.play();
        this.mathContainer.setVisible(true);
      },
    });

    this.answerButtons = [];

    // Cập nhật câu hỏi đầu tiên
    this.currentOperatorType = "addition"; 
    this.currentSymbol = "+";
    updateMathQuestion(this.currentOperatorType, this.currentSymbol, this);
  }
}

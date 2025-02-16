const RANDOM_COUNT_NUMBER = 5;
const RANDOM_NUMBER = Math.floor(Math.random() * 9) + 1;
const RANGE_MAX_NUMBER = 9;
const RANGE_MIN_NUMBER = 1;
const FRAME_RATE = 7;
const DEFAULT_SYMBOL = "+";
const DEFAULT_TYPE = "add";
const HExA_BUTTON = 0xfff66d;
const WIDTH_SCENE = window.innerWidth;
const HEIGHT_SCENE = window.innerHeight;
let correctCount = 0;
let incorrectCount = 0;
let boardX = 10; 
let boardY = 90;
let buttonSizeX = 110; 
let buttonSizeY = 110;
let spacing = 0;
class MathGame extends Phaser.Scene {
  constructor() {
    super({ key: "MathGame" });
  }

  // Tạo điểm số
  createText(x, y, text) {
    return this.add.text(x, y, text, {
      fontSize: "32px",
      fill: "#000",
      fontFamily: "Arial",
    });
  }
  // Tạo bảng câu hỏi
  createCenteredText(x, y, text, fontSize = "64px") {
    return this.add
      .text(x, y, text, {
        fontSize,
        fontStyle: "bold",
        color: "#000",
        fontFamily: "Arial",
        align: "center",
      })
      .setOrigin(0.5);
  }

  generateNumbers(type) {
    let num1 = Math.floor(Math.random() * RANGE_MAX_NUMBER) + 1;
    let num2 = Math.floor(Math.random() * RANGE_MAX_NUMBER) + 1;

    if (type === "subtract") {
      if (num1 < num2) {
        [num1, num2] = [num2, num1];
      }
    } else if (type === "divide") {
      num1 = num2 * (Math.floor(Math.random() * RANGE_MAX_NUMBER) + 1);
    }

    return [num1, num2];
  }

  calculateAnswer(num1, num2, type) {
    return type === "add"
      ? num1 + num2
      : type === "subtract"
      ? num1 - num2
      : type === "multiply"
      ? num1 * num2
      : num1 / num2;
  }

  generateOptions(correctAnswer) {
    const options = new Set();
    const randomIndex = Math.floor(Math.random() * RANDOM_COUNT_NUMBER); // Chọn vị trí ngẫu nhiên cho đáp án đúng
    let i = 0;

    while (options.size < RANDOM_COUNT_NUMBER) {
      if (i === randomIndex) {
        options.add(correctAnswer); // Đặt đáp án đúng vào vị trí ngẫu nhiên
      } else {
        const randomAnswer = correctAnswer + Math.floor(Math.random() * 10) - 5; // Tạo đáp án ngẫu nhiên
        if (randomAnswer !== correctAnswer && randomAnswer >= 0) {
          options.add(randomAnswer);
        }
      }
      i++;
    }

    return Array.from(options);
  }

  createOperationBoard(boardX, boardY, buttonSizeX, buttonSizeY, spacing) {
    this.operationBoard = this.add.container(boardX, boardY);

    let operations = [
      { symbol: "+", type: "add" },
      { symbol: "-", type: "subtract" },
      { symbol: "×", type: "multiply" },
      { symbol: "÷", type: "divide" },
    ];

    let selectedButton = null;

    operations.forEach((operation, index) => {
      let yOffset = index * (buttonSizeY + spacing);

      let button = this.add
        .rectangle(0, yOffset, buttonSizeX, buttonSizeY, 0xffffff)
        .setStrokeStyle(2, 0x000000)
        .setOrigin(0, 0)
        .setInteractive({ useHandCursor: true });

      let text = this.add
        .text(buttonSizeX / 2, yOffset + buttonSizeY / 2, operation.symbol, {
          fontSize: "48px",
          fontStyle: "bold",
          color: "#000",
        })
        .setOrigin(0.5);

      if (index === 0) {
        selectedButton = button;
        button.setFillStyle(HExA_BUTTON);
        this.currentOperatorType = operation.type;
        this.currentSymbol = operation.symbol;
        this.updateMathQuestion(this.currentOperatorType, this.currentSymbol);
      }

      button.on("pointerdown", () => {
        if (selectedButton && selectedButton !== button) {
          selectedButton.setFillStyle(0xffffff);
        }

        selectedButton = button;
        button.setFillStyle(HExA_BUTTON);

        this.currentOperatorType = operation.type;
        this.currentSymbol = operation.symbol;
      });

      // Hiệu ứng hover
      button.on("pointerover", () => {
        if (selectedButton !== button) button.setFillStyle(0xdddddd);
      });

      button.on("pointerout", () => {
        if (selectedButton !== button) button.setFillStyle(0xffffff);
      });

      this.operationBoard.add([button, text]);
    });

    this.add.existing(this.operationBoard);
  }

  preload() {
    this.load.image("background", "assets/background.png");
    this.load.image("card", "assets/card.png");
    this.load.audio("initial", "assets/sound_initial.mp3");
    this.load.audio("failure", "assets/sound_failure.mp3");
    this.load.audio("catch", "assets/sound_catch.mp3");
    this.load.audio("success", "assets/sound_success.mp3");
    this.load.spritesheet("sparkle", "assets/sparkle.png", {
      frameWidth: 140,
      frameHeight: 160,
    });
    this.load.spritesheet("characters", "assets/cast2.png", {
      frameWidth: 563,
      frameHeight: 395,
    });
  }

  create() {
    let bg = this.add.image(0, 0, "background").setOrigin(0, 0);
    bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);
    this.initial = this.sound.add("initial");
    this.failure = this.sound.add("failure");
    this.catch = this.sound.add("catch");
    this.success = this.sound.add("success");
    this.card = this.add.image(385, -200, "card"); 
    this.incorrectText = this.createText(450, 16, "Incorrect: 0");
    this.correctText = this.createText(150, 16, "Correct: 0");

    // Tạo hoạt ảnh nhân vật

    this.anims.create({
      key: "character-success",
      frames: [
        { key: "characters", frame: 0 },
        { key: "characters", frame: 7 },
        { key: "characters", frame: 8 },
      ],
      frameRate: FRAME_RATE,
      repeat: 0,
    });

    this.anims.create({
      key: "character-fail",
      frames: [
        { key: "characters", frame: 5 },
        { key: "characters", frame: 6 },
      ],
      frameRate: FRAME_RATE,
      repeat: 0,
    });

    this.anims.create({
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

    this.anims.create({
      key: "character-wait",
      frames: [
        { key: "characters", frame: 4 },
        { key: "characters", frame: 3 },
      ],
      frameRate: FRAME_RATE,
      repeat: 0,
    });

    this.anims.create({
      key: "sparkle",
      frames: this.anims.generateFrameNumbers("sparkle", { start: 0, end: 8 }),
      frameRate: FRAME_RATE,
      repeat: -1,
    });

    this.characters = this.add.sprite(383, 435, "characters");
    this.sparkles = this.add.sprite(385, 660, "sparkle");

    this.mathContainer = this.add.container(385, 250);

    // Phép toán
    this.questionTextNumber1 = this.add
      .text(45, 0, "", {
        fontSize: "64px",
        fontStyle: "bold",
        color: "#000",
        fontFamily: "Arial",
        align: "center",
      })
      .setOrigin(0.5);

    this.questionTextNumber2 = this.add
      .text(0, 70, "", {
        fontSize: "64px",
        fontStyle: "bold",
        color: "#000",
        fontFamily: "Arial",
        align: "center",
      })
      .setOrigin(0.5);

    this.tutorialText = this.createText(-170, -150, "Select an answer below");
    this.underline = this.createCenteredText(0, 90, "_____");
    this.answerText = this.createCenteredText(45, 170, "");
    this.createOperationBoard(
      boardX,
      boardY,
      buttonSizeX,
      buttonSizeY,
      spacing
    );
    // Thêm vào container
    this.mathContainer.add([
      this.questionTextNumber1,
      this.questionTextNumber2,
      this.underline,
      this.answerText,
      this.tutorialText,
    ]);
    this.mathContainer.setVisible(false);
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
  }
  dropCardAnimation(onCompleteCallback) {
    this.mathContainer.setVisible(false);
    this.waitAnimation();
    this.tweens.add({
      targets: this.card,
      y: 800,
      duration: 700,
      ease: "Quad.In",
      onComplete: () => {
        this.card.y = -200;
        if (onCompleteCallback) onCompleteCallback();

        this.tweens.add({
          targets: this.card,
          y: 328,
          duration: 500,
          ease: "Linear",
          onComplete: () => {
            this.catch.play();
            this.mathContainer.setVisible(true);
          },
        });
      },
    });
  }

  catchAnimation() {
    this.characters.play("character-catch");
  }

  waitAnimation() {
    this.characters.play("character-wait");
  }

  successAnimation() {
    this.success.play();
    this.characters.play("character-success");
  }

  failureAnimation() {
    this.failure.play();
    this.characters.play("character-fail");
  }

  updateChoices() {
    const options = this.generateOptions(this.correctAnswer);

    this.answerButtons.forEach(({ txt }, index) => {
      txt.setText(options[index]);
    });
  }

  createChoice(options) {
    this.answerContainer = this.add.container(0, 0);
    this.answerButtons = [];
    if (!this.answerContainer) {
      this.answerContainer = this.add.container(0, 0);
      this.answerButtons = [];
    }
    for (let i = 0; i < RANDOM_COUNT_NUMBER; i++) {
      let xPos = 110 + i * 140;
      let yPos = 700;
      let width = 125;
      let height = 125;
      let radius = 20;

      let buttonGraphics = this.add.graphics();
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

      let btn = this.add.container(xPos, yPos, [buttonGraphics]);
      btn.setSize(width, height);
      btn.setInteractive({ useHandCursor: true });

      let txt = this.add
        .text(xPos, yPos, `${options[i]}`, {
          fontSize: "48px",
          fontStyle: "bold",
          color: "#000",
        })
        .setOrigin(0.5);

      btn.on("pointerdown", () => {
        this.checkAnswer(parseInt(txt.text));
        this.clearChoices();

        this.time.delayedCall(600, () => {
          this.updateChoices();
        });
      });

      this.answerContainer.add([btn, txt]);

      this.answerButtons.push({ btn, txt });
    }
    this.answerButtons.forEach((choice, index) => {
      choice.txt.setText(options[index]);
      choice.btn.setInteractive({ useHandCursor: true });
    });
  }

  clearChoices() {
    if (this.answerContainer) {
      this.tweens.add({
        targets: this.answerContainer.list,
        alpha: 0,
        scaleX: 0,
        scaleY: 0,
        duration: 500,
        onComplete: () => {
          this.answerContainer.removeAll(true);
          this.answerButtons = [];
        },
      });
    }
  }

  updateMathQuestion(operatorType, symbol) {
    let [number1, number2] = this.generateNumbers(operatorType);
    this.correctAnswer = this.calculateAnswer(number1, number2, operatorType);
    this.options = this.generateOptions(this.correctAnswer);
    this.createChoice(this.options);

    this.questionTextNumber1.setText(`${number1}`);
    this.questionTextNumber2.setText(`${symbol}   ${number2}`);

    this.answerButtons.forEach((choice, index) => {
      choice.txt.setText(this.options[index]);
      choice.btn.setInteractive({ useHandCursor: true });
    });
    this.answerButtons.forEach((choice) =>
      choice.btn.setInteractive({ useHandCursor: true })
    );
    this.answerContainer.setVisible(true);

    this.updateChoices();
  }

  checkAnswer(selected) {
    this.answerButtons.forEach((choice) => choice.btn.disableInteractive());

    if (selected === this.correctAnswer) {
      correctCount++;
      this.correctText.setText(`Correct: ${correctCount}`);
      this.answerText.setText(selected);
      this.successAnimation();

      this.sparkles.setVisible(true);
      this.sparkles.play("sparkle");
    } else {
      incorrectCount++;
      this.incorrectText.setText(`Incorrect: ${incorrectCount}`);
      this.answerText.setText(selected);
      this.failureAnimation();
    }

    this.time.delayedCall(1500, () => {
      this.sparkles.setVisible(false);
      this.answerText.setText("");
      this.dropCardAnimation(() => {
        this.catchAnimation();
        this.updateMathQuestion(this.currentOperatorType, this.currentSymbol);
      });
    });
  }
}

const config = {
  type: Phaser.AUTO,
  width: 780,
  height: 777,
  scene: MathGame,
};

const game = new Phaser.Game(config);

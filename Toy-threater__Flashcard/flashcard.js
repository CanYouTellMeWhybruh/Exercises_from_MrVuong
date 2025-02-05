const RANDOM_COUNT_NUMBER = 5;
const RANDOM_NUMBER = Math.floor(Math.random() * 9) + 1;
const RANGE_MAX_NUMBER = 9;
const RANGE_MIN_NUMBER = 1;
const FRAME_RATE = 1;
const HEIGHT_SCENE = 777;
const WIDTH_SCENE = 780;
var correctText;
var incorrectText;
var Options;
// Kích thước và vị trí bảng
let boardX = 10; // Vị trí X
let boardY = 90; // Vị trí Y
let buttonSizeX = 100; // Kích thước ô vuông
let buttonSizeY = 100;
let spacing = 0; // Khoảng cách giữa các ô

class MathGame extends Phaser.Scene {
    constructor() {
        super({ key: 'MathGame' });
    }

    preload() {
        this.load.image('background', 'assets/background.png');
        this.load.image('card', 'assets/card.png');
        this.load.spritesheet('characters', 'assets/cast2.png', { frameWidth: 563, frameHeight: 395 });
    }

    create() {
        let bg = this.add.image(0, 0, 'background').setOrigin(0, 0);
        bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);
        this.add.image(385, 328, 'card');

        this.incorrectText = this.add.text(450, 16, 'Incorrect: 0', { fontSize: '32px', fill: '#000', fontFamily: 'Arial' });
        this.correctText = this.add.text(150, 16, 'Correct: 0', { fontSize: '32px', fill: '#000', fontFamily: 'Arial' });

        // Phép toán hiển thị theo dạng dọc
    this.questionText = this.add.text(385, 300, "", {
        fontSize: "64px",
        fontStyle: "bold",
        color: "#000",
        fontFamily: "Arial",
        align: "center"
    }).setOrigin(0.5);

    // Gạch ngang dưới dấu "="
    this.underline = this.add.text(385, 390, "____", {
        fontSize: "64px",
        fontStyle: "bold",
        color: "#000",
        fontFamily: "Arial",
        align: "center"
    }).setOrigin(0.5);
    // Choice
    this.answerButtons = [];
        for (let i = 0; i < RANDOM_COUNT_NUMBER; i++) {
            let btn = this.add.rectangle(110 + i * 140, 700, 125, 125, 0xffffff)
                .setStrokeStyle(2, 0x000000)
                .setOrigin(0.5)
                .setInteractive({ useHandCursor: true });
            
            let txt = this.add.text(110 + i * 140, 700, "15", {
                fontSize: '48px',
                fontStyle: 'bold',
                color: '#000'
            }).setOrigin(0.5);
            
            btn.on('pointerdown', () => this.checkAnswer(parseInt(txt.text)));
            this.answerButtons.push({ btn, txt });
        }

    this.operationBoard = this.add.container(boardX, boardY);

    let operations = [
        { symbol: '+', type: 'add' },
        { symbol: '-', type: 'subtract' },
        { symbol: '×', type: 'multiply' },
        { symbol: '÷', type: 'divide' }
    ];

    operations.forEach((operation, index) => {
        let yOffset = index * (buttonSizeY + spacing);

        let button = this.add.rectangle(0, yOffset, buttonSizeX, buttonSizeY, 0xffffff)
            .setStrokeStyle(2, 0x000000)
            .setOrigin(0, 0)
            .setInteractive({ useHandCursor: true }); // 🖱️ Con trỏ bàn tay

        let text = this.add.text(buttonSizeX / 2, yOffset + buttonSizeY / 2, operation.symbol, {
            fontSize: '48px',
            fontStyle: 'bold',
            color: '#000'
        }).setOrigin(0.5);

        button.on('pointerdown', () => {
            this.updateMathQuestion(operation.type, operation.symbol);
        });

         // 🔥 Hiệu ứng khi di chuột vào
        button.on('pointerover', () => {
            button.setFillStyle(0xdddddd); // Màu xám nhạt khi hover
        });

        button.on('pointerout', () => {
            button.setFillStyle(0xffffff); // Quay lại màu trắng khi rời chuột
        });

        this.operationBoard.add([button, text]);
    });

    this.add.existing(this.operationBoard);

        // Tạo hoạt ảnh nhân vật

        this.anims.create({
            key: 'character',
            frames: this.anims.generateFrameNumbers('characters', { start: 0, end: 8 }),
            frameRate: FRAME_RATE,
            repeat: -1
        });

        this.characters = this.add.sprite(383, 435, 'characters'); 

        // // Chạy animation
        // this.characters.play('character');

    }

    // Cập nhật phép tính
    updateMathQuestion(operatorType, symbol) {
        let [number1, number2] = generateNumbers(operatorType);
        this.questionText.setText(`${number1}\n${symbol}\n${number2}`);
    }
    checkAnswer(selected) {
        if (selected === this.correctAnswer) {
            correctCount++;
            this.correctText.setText(`Correct: ${correctCount}`);
        } else {
            incorrectCount++;
            this.incorrectText.setText(`Incorrect: ${incorrectCount}`);
        }
        this.updateMathQuestion();
    }   

}

const config = {
    type: Phaser.AUTO,
    width: 780,
    height: 777,
    scene: MathGame
};

const game = new Phaser.Game(config);

// Tạo ra cặp số 

function generateNumbers(type) {
    let num1 = Math.floor(Math.random() * (RANGE_MAX_NUMBER - RANGE_MIN_NUMBER + 1)) + RANGE_MIN_NUMBER;
    let num2 = Math.floor(Math.random() * (RANGE_MAX_NUMBER - RANGE_MIN_NUMBER + 1)) + RANGE_MIN_NUMBER;
    
    if (type === 'subtract' && num1 < num2) [num1, num2] = [num2, num1];
    if (type === 'divide') {
        let divisors = Array.from({ length: num1 }, (_, i) => i + 1).filter(n => num1 % n === 0);
        num2 = divisors[Math.floor(Math.random() * divisors.length)];
    }
    
    return [num1, num2];
}


// Tạo ra các options

function calculateAnswer(num1, num2, type) {
    return type === 'add' ? num1 + num2 : type === 'subtract' ? num1 - num2 : type === 'multiply' ? num1 * num2 : num1 / num2;
}

function generateOptions(correctAnswer) {
    let options = new Set([correctAnswer]);
    while (options.size < RANDOM_COUNT_NUMBER) {
        let fakeAnswer = correctAnswer + Math.floor(Math.random() * 5) - 2;
        if (fakeAnswer >= 0) options.add(fakeAnswer);
    }
    return Array.from(options).sort(() => Math.random() - 0.5);
}


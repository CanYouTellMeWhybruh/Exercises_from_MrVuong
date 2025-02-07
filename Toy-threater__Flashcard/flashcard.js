const RANDOM_COUNT_NUMBER = 5;
const RANDOM_NUMBER = Math.floor(Math.random() * 9) + 1;
const RANGE_MAX_NUMBER = 9;
const RANGE_MIN_NUMBER = 1;
const FRAME_RATE_CHARACTER = 1;
const FRAME_RATE_SPARKLE = 10;
const HEIGHT_SCENE = 777;
const WIDTH_SCENE = 780;
const DEFAULT_SYMBOL = '+';
const DEFAULT_TYPE = 'add';
// Kích thước và vị trí bảng
let boardX = 10; // Vị trí X
let boardY = 90; // Vị trí Y
let buttonSizeX = 100; // Kích thước ô vuông
let buttonSizeY = 100;
let spacing = 0; // Khoảng cách giữa các ô
let correctCount = 0;
let incorrectCount = 0;


class MathGame extends Phaser.Scene {
    constructor() {
        super({ key: 'MathGame' });
    }

    preload() {
        this.load.image('background', 'assets/background.png');
        this.load.image('card', 'assets/card.png');
        this.load.spritesheet('characters', 'assets/cast2.png', { frameWidth: 563, frameHeight: 395 });
        this.load.spritesheet('sparkle', 'assets/sparkle.png', {frameWidth: 140, frameHeight: 160});
        this.load.audio('initial', 'assets/sound_initial.mp3');
    }

    create() {

        // Thêm background và card
        let bg = this.add.image(0, 0, 'background').setOrigin(0, 0);
        bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);
        let card = this.add.image(385, -200, 'card');

        // Thêm âm thanh và các thông sốsố
        this.initial = this.sound.add('initial');
        this.incorrectText = this.add.text(450, 16, 'Incorrect: 0', { fontSize: '32px', fill: '#000', fontFamily: 'Arial' });
        this.correctText = this.add.text(150, 16, 'Correct: 0', { fontSize: '32px', fill: '#000', fontFamily: 'Arial' });
        this.tutorialText = this.add.text(215,90, 'Select an answer below', {fontSize: '32px', fill: '#000', fontFamily: 'Arial'});
        
        // Tạo phép toán hiển thị theo dạng dọc
        this.questionText = this.add.text(385, 280, "", {
            fontSize: "64px",
            fontStyle: "bold",
            color: "#000",
            fontFamily: "Arial",
            align: "center"
        }).setOrigin(0.5);

        // Tạo dâú bằng gạch ngang
        this.underline = this.add.text(385, 350, "____", {
            fontSize: "80px",
            fontStyle: "bolder",
            color: "#000",
            fontFamily: "Arial",
            align: "center"
        }).setOrigin(0.5); ///////////////////
        
        // Set vị trí cho đáp án được lựa chọnchọn
        this.answerText = this.add.text(410, 440, "", {
            fontSize: "64px",
            fontStyle: "bold",
            color: "#000",
            fontFamily: "Arial",
            align: "center"
        }).setOrigin(0.5);

        // Tạo ra các button dấu phép tính
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
                fontSize: '60px',
                fontStyle: 'bold',
                color: '#000'
            }).setOrigin(0.5);
        this.updateMathQuestion(DEFAULT_TYPE, DEFAULT_SYMBOL);
        button.on('pointerdown', () => {
            this.currentType = operation.type;
            this.currentSymbol = operation.symbol;
            this.updateMathQuestion(this.currentType, this.currentSymbol);
        });


        // this.tweens.add({
        //     targets: card,
        //     y: 328, 
        //     duration: 1200,   // Tăng thời gian rơi xuống (chậm hơn)
        //     ease: 'Bounce.Out', // Rơi chậm dần
        //     onComplete: () => {

        //         this.initial.play();
        //         // Khi chạm đáy, bật lên 1 lần nhẹ rồi dừng
        //         this.tweens.add({
        //             targets: card,
        //             y: 400,      // Bật lên một chút
        //             duration: 300, // Nhanh hơn
        //             ease: 'Quad.Out',
        //             yoyo: true,  // Chỉ bật lên rồi trở về y=328

        //             onStart: () => {
        //                 this.initial.play();  // 🔊 Phát khi bật lên
        //             }
        //         });
        //     }
        // });

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




    // this.updateMathQuestion(DEFAULT_TYPE, DEFAULT_SYMBOL);
    //     button.on('pointerdown', () => {
    //         this.currentType = operation.type;
    //         this.currentSymbol = operation.symbol;
    //         this.updateMathQuestion(this.currentType, this.currentSymbol);
    //     });

        // Tạo hoạt ảnh nhân vật

        this.anims.create({
            key: 'character',
            frames: this.anims.generateFrameNumbers('characters', { start: 0, end: 8 }),
            frameRate: FRAME_RATE_CHARACTER,
            repeat: -1
        });

        this.anims.create({
            key: 'sparkle',
            frames: this.anims.generateFrameNumbers('sparkle', { start: 0, end: 8}),
            frameRate: FRAME_RATE_SPARKLE,
            repeat: -1
        });
        

        this.characters = this.add.sprite(383, 435, 'characters'); 
        this.sparkles = this.add.sprite(385, 660, 'sparkle');

        // // Chạy animation
        this.sparkles.play('sparkle');

    }
    // Cập nhật phép tính
    updateMathQuestion(operatorType, symbol) {
        this.numbers = generateNumbers(operatorType); // Cập nhật lại giá trị
        this.questionText.setText(`\t\t\t\t${this.numbers[0]}\n${symbol}  ${this.numbers[1]}`);
        this.correctAnswer = calculateAnswer(this.numbers[0], this.numbers[1], operatorType);
        this.options = generateOptions(this.correctAnswer);
        // Choice
    this.answerButtons = [];
    for (let i = 0; i < RANDOM_COUNT_NUMBER; i++) {
        let btn = this.add.rectangle(110 + i * 140, 700, 125, 125, 0xffffff)
            .setStrokeStyle(2, 0x000000)
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true });
        
        let txt = this.add.text(110 + i * 140, 700, `${this.options[i]}`, {
            fontSize: '48px',
            fontStyle: 'bold',
            color: '#000'
        }).setOrigin(0.5);
        
        btn.on('pointerdown', () => {
            this.checkAnswer(parseInt(txt.text))
            
        });

        this.answerButtons.push({ btn, txt });
        
    }
    }

    createNewQuestion() {
        this.questionText = this.add.text(385, 280, "", {
            fontSize: "64px",
            fontStyle: "bold",
            color: "#000",
            fontFamily: "Arial",
            align: "center"
        }).setOrigin(0.5);
    
        this.underline = this.add.text(385, 350, "____", {
            fontSize: "80px",
            fontStyle: "bolder",
            color: "#000",
            fontFamily: "Arial",
            align: "center"
        }).setOrigin(0.5);
    
        this.updateMathQuestion(this.currentType, this.currentSymbol);
    }

    checkAnswer(selected) {
        if (selected === this.correctAnswer) {
            correctCount++;
            this.correctText.setText(`Correct: ${correctCount}`);
        } else {
            incorrectCount++;
            this.incorrectText.setText(`Incorrect: ${incorrectCount}`);
        }
        this.answerText.setText(selected);
    
        // Hiện câu trả lời trong 1 giây rồi thay thế bằng câu hỏi mới
        this.time.delayedCall(1000, () => {
            // Xóa toàn bộ câu hỏi và đáp án cũ
            this.questionText.destroy();
            this.underline.destroy();
            this.answerText.destroy();
            this.answerButtons.forEach(({ btn, txt }) => {
                btn.destroy();
                txt.destroy();
            });
    
            // Tạo câu hỏi và đáp án mới
            this.createNewQuestion();
        });
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
    let num1 = Math.floor(Math.random() * RANGE_MAX_NUMBER) + 1;
    let num2 = Math.floor(Math.random() * RANGE_MAX_NUMBER) + 1;
    
    if (type === 'subtract'){
        if(num1 < num2){
            [num1, num2] = [num2, num1];
        }
    }else if (type === 'divide') {
        num1 = num2 * (Math.floor(Math.random() * RANGE_MAX_NUMBER) + 1);
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


const RANDOM_COUNT_NUMBER = 5;
const RANDOM_NUMBER = Math.floor(Math.random() * 9) + 1;
const RANGE_MAX_NUMBER = 9;
const RANGE_MIN_NUMBER = 1;
const FRAME_RATE = 7;
const HEIGHT_SCENE = 777;
const WIDTH_SCENE = 780;
const DEFAULT_SYMBOL = '+';
const DEFAULT_TYPE = 'add';
var correctText;
var incorrectText;
let correctCount = 0;
let incorrectCount = 0;
// Kích thước và vị trí bảng
let boardX = 10; // Vị trí X
let boardY = 90; // Vị trí Y
let buttonSizeX = 110; // Kích thước ô vuông
let buttonSizeY = 110;
let spacing = 0; // Khoảng cách giữa các ô

class MathGame extends Phaser.Scene {
    constructor() {
        super({ key: 'MathGame' });
    }

    generateNumbers(type) {
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

    calculateAnswer(num1, num2, type) {
        return type === 'add' ? num1 + num2 :
               type === 'subtract' ? num1 - num2 :
               type === 'multiply' ? num1 * num2 :
               num1 / num2;
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

    preload() {
        this.load.image('background', 'assets/background.png');
        this.load.image('card', 'assets/card.png');
        this.load.audio('initial', 'assets/sound_initial.mp3');
        this.load.audio('failure', 'assets/sound_failure.mp3');
        this.load.audio('catch', 'assets/sound_catch.mp3');
        this.load.audio('success', 'assets/sound_success.mp3');
        this.load.spritesheet('characters', 'assets/cast2.png', { frameWidth: 563, frameHeight: 395 });
    }

    create() {
        let bg = this.add.image(0, 0, 'background').setOrigin(0, 0);
        bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);
        this.add.image(385, 328, 'card');
        this.initial = this.sound.add('initial');
        this.failure = this.sound.add('failure');
        this.catch = this.sound.add('catch');
        this.success = this.sound.add('success');
        this.incorrectText = this.add.text(450, 16, 'Incorrect: 0', { fontSize: '32px', fill: '#000', fontFamily: 'Arial' });
        this.correctText = this.add.text(150, 16, 'Correct: 0', { fontSize: '32px', fill: '#000', fontFamily: 'Arial' });

        
        // Phép toán hiển thị theo dạng dọc
    this.questionText = this.add.text(385, 280, "", {
        fontSize: "64px",
        fontStyle: "bold",
        color: "#000",
        fontFamily: "Arial",
        align: "center"
    }).setOrigin(0.5);

    // Gạch ngang dưới dấu "="
    this.underline = this.add.text(385, 350, "____", {
        fontSize: "64px",
        fontStyle: "bold",
        color: "#000",
        fontFamily: "Arial",
        align: "center"
    }).setOrigin(0.5);

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
        this.updateMathQuestion(DEFAULT_TYPE,DEFAULT_SYMBOL);
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

        // Tạo hoạt ảnh nhân vật khi trả lời đúng

        this.anims.create({
            key: 'character-success',
            frames: [
                { key: 'characters', frame: 0 },
                { key: 'characters', frame: 7 },
                { key: 'characters', frame: 8 }
            ],
            frameRate: FRAME_RATE,
            repeat: 0
        });

        this.anims.create({
            key: 'character-fail',
            frames: [
                { key: 'characters', frame: 5 },
                { key: 'characters', frame: 6 },
            ],
            frameRate: FRAME_RATE,
            repeat: 0
        });

        this.anims.create({
            key: 'character-wait',
            frames: [
                { key: 'characters', frame: 4 },
                { key: 'characters', frame: 3 },
                { key: 'characters', frame: 2 },
                { key: 'characters', frame: 1 },
                { key: 'characters', frame: 0 },
            ],
            frameRate: FRAME_RATE,
            repeat: 0
        })
        
        this.characters = this.add.sprite(383, 435, 'characters'); 
        
        // // Chạy animation
        // this.characters.play('character-success');
        
    }
    
    catchAnimation(){
        this.characters.play('character-wait');
    }

    successAnimation() {
        this.success.play();
        this.characters.play('character-success'); 
    }

    failureAnimation(){
        this.failure.play();
        this.characters.play('character-fail');
    }

    updateChoices() {
        let options = this.generateOptions(this.correctAnswer);
        
        this.answerButtons.forEach(({ txt }, index) => {
            txt.setText(options[index]);
        });
    }

    // Choice
    createChoice(options){
    this.answerButtons = [];
    for (let i = 0; i < RANDOM_COUNT_NUMBER; i++) {
        let btn = this.add.rectangle(110 + i * 140, 700, 125, 125, 0xffffff)
            .setStrokeStyle(2, 0x000000)
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true });
        
        let txt = this.add.text(110 + i * 140, 700, `${options[i]}`, {
            fontSize: '48px',
            fontStyle: 'bold',
            color: '#000'
        }).setOrigin(0.5);
        
        btn.on('pointerdown', () => this.checkAnswer(parseInt(txt.text)));
        this.answerButtons.push({ btn, txt });
    }
    }

    // Cập nhật phép tính
    updateMathQuestion(operatorType, symbol) {
        let [number1, number2] = this.generateNumbers(operatorType);
        this.correctAnswer = this.calculateAnswer(number1, number2, operatorType);
        this.options = this.generateOptions(this.correctAnswer);
        this.createChoice(this.options);
    
        // Lưu toán tử hiện tại để gọi lại khi cần
        this.currentOperatorType = operatorType;
        this.currentSymbol = symbol;
    
        this.questionText.setText(`\t\t\t\t\t${number1}\n${symbol}   ${number2}`);
    
        // Cập nhật lại danh sách đáp án
        this.updateChoices();
    }
    
    checkAnswer(selected) {
        if (selected === this.correctAnswer) {
            correctCount++;
            this.correctText.setText(`Correct: ${correctCount}`);
            this.successAnimation(); // Gọi animation khi đúng
        } else {
            incorrectCount++;
            this.incorrectText.setText(`Incorrect: ${incorrectCount}`);
            this.failureAnimation();
        }

    
        // Hiển thị đáp án và chờ trước khi tạo câu hỏi mới
        this.time.delayedCall(1500, () => {
            this.catchAnimation();
            this.updateMathQuestion(this.currentOperatorType, this.currentSymbol);
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

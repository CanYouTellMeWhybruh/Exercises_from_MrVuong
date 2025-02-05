class Level {
    constructor(id, index, operatorType) {
        this.id = id;
        this.index = index;
        this.operationType = operatorType;
    }

    toCSVRecord() {
        return [this.id, this.index, this.operationType].join(",");
    }
}

class Operation {
    constructor(id, operationType, number1, number2) {
        this.id = id;
        this.operationType = operationType;
        this.number1 = number1;
        this.number2 = number2;
    }

    toCSVRecord() {
        return [this.id, this.operationType, this.number1, this.number2].join(",");
    }
}

class Option {
    constructor(id, index, operationId, value) {
        this.id = id;
        this.index = index;
        this.operationId = operationId;
        this.value = value;
    }

    toCSVRecord() {
        return [this.id, this.index, this.operationId, this.value].join(",");
    }
}

const RANGE_MAX_NUMBER = 9;
const RANDOM_COUNT_NUMBER = 5;
const RANGE_MIN_NUMBER = 1;
const OPTION_COUNT_PER_OPERATION = 5;
const OPERATION_COUNT_PER_LEVEL = 7;
const OPERATION_TYPE_ENUM = ["add", "subtract", "multiply", "divide"];

function generateLevels() {
    const levels = [];
    let levelId = 0;

    for (let eachType = 0; eachType < OPERATION_COUNT_PER_LEVEL; eachType++) {
        for (let levelIndex = 0; levelIndex < OPERATION_TYPE_ENUM.length; levelIndex++) {
            const index = levelIndex + 1;
            const level = new Level(++levelId, index, OPERATION_TYPE_ENUM[levelIndex]);
            levels.push(level);
        }
    }
    return levels;
}

function generateOperation(levels) {
    const operations = [];
    let operationId = 0;

    for (let eachLevel = 0; eachLevel < levels.length; eachLevel++) {
        const numbers = generateNumbers(levels[eachLevel].operationType);
        const operation = new Operation(++operationId, levels[eachLevel].operationType, numbers[0], numbers[1]);
        operations.push(operation);
    }
    return operations;
}

function generateOptions(operations) {
    const options = [];
    let optionId = 1;

    operations.forEach((operation) => {
        let optionValues = generateValue(operation.number1, operation.number2, operation.operationType);
        for (let optionIndex = 1; optionIndex <= OPTION_COUNT_PER_OPERATION; optionIndex++) {
            let option = new Option(optionId, optionIndex, operation.id, optionValues[optionIndex - 1]);
            options.push(option);
            optionId++;
        }
    });

    return options;
}

function generateNumbers(operatorType) {
    let number1 = Math.floor(Math.random() * (RANGE_MAX_NUMBER - RANGE_MIN_NUMBER + 1)) + RANGE_MIN_NUMBER;
    let number2 = Math.floor(Math.random() * (RANGE_MAX_NUMBER - RANGE_MIN_NUMBER + 1)) + RANGE_MIN_NUMBER;

    if (operatorType === "subtract") {
        number2 = Math.floor(Math.random() * (number1 - RANGE_MIN_NUMBER + 1)) + RANGE_MIN_NUMBER;
    } else if (operatorType === "divide") {
        do {
            number2 = Math.floor(Math.random() * (RANGE_MAX_NUMBER - RANGE_MIN_NUMBER + 1)) + RANGE_MIN_NUMBER;
        } while (number2 === 0 || number1 % number2 !== 0);
    }
    return [number1, number2];
}

function generateValue(number1, number2, Type) {
    let answer;
    if (Type === "add") {
        answer = number1 + number2;
    } else if (Type === "subtract") {
        answer = number1 - number2;
    } else if (Type === "multiply") {
        answer = number1 * number2;
    } else {
        answer = number1 / number2;
    }

    let optionValues = [];
    const randomIndex = Math.floor(Math.random() * RANDOM_COUNT_NUMBER);

    for (let j = 0; j < RANDOM_COUNT_NUMBER; j++) {
        if (j === randomIndex) {
            optionValues.push(answer);
        } else {
            let randomAnswer;
            do {
                randomAnswer = answer + Math.floor(Math.random() * 9) + 1;
            } while (optionValues.includes(randomAnswer));
            optionValues.push(randomAnswer);
        }
    }
    return optionValues;
}

const levels = generateLevels();
const operations = generateOperation(levels);
const options = generateOptions(operations);

console.log(options);
